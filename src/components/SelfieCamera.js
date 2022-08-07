import React, { useEffect, useState, useRef, useImperativeHandle } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";
/**
 * A <video/> element live streaming from the user's camera. The SelfieCamera's ref
 * is customized with a 'video' property referencing the <video/> element,
 * enabling for example media track access: ref.current.video.srcObject?.getTracks()
 * @prop {Integer} width - the video display width in pixels
 * @prop {Integer} height - the video display height in pixels
 * @prop {Boolean} withAudio - if true, collects both audio and video tracks
 * @prop {Function} onTryMediaAccess - called after each attempt to access the user's
 *   media. If the attempt is successful, true is passed as the only argument.
 *   If not, false is passed as the first argument, and the second argument is
 *   a DOMException with error name 'NotAllowedError' if the user denies permission
 *   or 'NotFoundError' if the requested media are not available.
 * @prop {String} classNameVideo - a classname for the rendered <video/> tag
 * @prop {String} classNameErr - a classname for the media access error message <div/>
 * @prop {String} classNameErrMessage - a classname for the <p/> nested in the error <div/>
 * @prop {String} classNameErrRetryButton - a classname for the <button/> nested in the error <div/>
 */
const SelfieCamera = React.forwardRef(
  (
    {
      width,
      height,
      withAudio,
      onTryMediaAccess,
      classNameVideo,
      classNameErr,
      classNameErrMessage,
      classNameErrRetryButton,
    },
    ref
  ) => {
    const [streaming, setStreaming] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState(null);

    const videoRef = useRef();

    // an object that may eventually hold an audiovideo recording
    const [videoData, setVideoData] = useState({
      blob: null, // this property may be set to a Promise
      resolve() {}, // this method would then be set to be able to resolve that Promise
    });

    // handles the dataavailable event fired when a recording stops
    function handleDataAvailable(event) {
      videoData.resolve(event.data);
    }

    function getVideo() {
      // request media access
      let constraints = {
        video: { facingMode: "user" },
        audio: withAudio,
      };
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          // play video stream from camera
          let video = videoRef.current;
          video.srcObject = stream;
          video.play();

          // set up media recording apparatus
          const newMediaRecorder = new MediaRecorder(stream);
          newMediaRecorder.ondataavailable = handleDataAvailable;
          mediaRecorder?.stop(); // stop any previous (accidental) recording
          setMediaRecorder(newMediaRecorder);

          // custom actions on successful media access
          onTryMediaAccess && onTryMediaAccess(true);

          setStreaming(true);
        })
        .catch((err) => {
          // media unavailable so take down display and recording apparatus
          videoData.resolve(); // resolve (discard) any unresolved Promise
          videoData.resolve = () => {};
          videoData.blob = null;
          mediaRecorder?.stop();
          setMediaRecorder(null);

          // custom actions on failed media access
          onTryMediaAccess && onTryMediaAccess(false, err);

          setStreaming(false);
        });
    }

    useImperativeHandle(ref, () => ({
      // the <video/> element
      get video() {
        return videoRef.current;
      },

      // instructs the media recorder to start recording
      startRecording() {
        // resolve (discard) any unresolved Promise
        videoData.resolve();
        // create a new unresolved Promise to receive the recording later
        videoData.blob = new Promise((res) => (videoData.resolve = res));
        // start the recording
        mediaRecorder?.start();
      },

      // stops and captures the recording
      async stopRecording() {
        mediaRecorder?.stop();
        // mediaRecorder will fire a dataavailable event, which will trigger
        //   a call to handleDataAvailable and resolve the videoData.blob Promise
        const blob = await videoData.blob;
        // save blob using audio/webm MIME type, which seems to keep both audio and video
        return new Blob([blob], { type: "audio/webm" });
      },
    }));

    useEffect(() => {
      getVideo();
    }, [videoRef]);

    return (
      <div>
        {/* The <video/> tag itself is always rendered, because it is
            involved in setting up the media stream as well as streaming. */}
        <video
          muted
          ref={videoRef}
          className={classNameVideo}
          // The width and height are conditional so that the <video/> tag
          // does not displace the error message when not streaming.
          width={streaming ? width : 0}
          height={streaming ? height : 0}
        />
        {/* The media access error message is rendered only if not streaming */}
        {!streaming && (
          <div width={width} height={height} className={classNameErr}>
            <p className={classNameErrMessage}>
              Camera{withAudio && " or microphone"} unavailable. Please check
              your permission settings.
            </p>
            <Button
              outline
              onClick={getVideo}
              className="bg-dark p-3 mt-4 classNameErrRetryButton text-white"
            >
              Retry
            </Button>
          </div>
        )}
      </div>
    );
  }
);

/**
 * Captures a still image from a SelfieCamera and draws it onto a canvas (if provided)
 * @param {React reference} cameraRef a reference to the SelfieCamera component
 * @param {React reference} [canvasRef] a reference to a canvas element
 * @return {Promise<Blob>} a Promise resolving to the image in png format
 */
async function takeSelfie(cameraRef, canvasRef) {
  let camera = cameraRef.current.video;
  let canvas = canvasRef?.current || document.createElement("canvas");

  // calculate image placement
  let dx = 0;
  let dy = 0;
  let dw = canvas.width;
  let dh = canvas.height;
  const sw = camera.videoWidth;
  const sh = camera.videoHeight;
  if (sw / sh < dw / dh) {
    // tall image
    dw = (dh * sw) / sh;
    dx = (canvas.width - dw) / 2;
  } else if (sw / sh > dw / dh) {
    // wide image
    dh = (dw * sh) / sw;
    dy = (canvas.height - dh) / 2;
  }

  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(camera, dx, dy, dw, dh);

  let imageBlob = await new Promise((res) => {
    canvas.toBlob((blob) => {
      res(blob);
    }, "image/png");
  });

  return imageBlob;
}

/**
 * Instructs a SelfieCamera to begin recording
 * @param {React reference} cameraRef a reference to the SelfieCamera component
 */
async function startRecording(cameraRef) {
  cameraRef.current.startRecording();
}

/**
 * Stops and captures a recording from a SelfieCamera
 * @param {React reference} cameraRef a reference to the SelfieCamera component
 * @return {Promise<Blob>} a Promise resolving to the recording in webm format
 */
async function stopRecording(cameraRef) {
  return await cameraRef.current.stopRecording();
}

export default SelfieCamera;
export { takeSelfie, startRecording, stopRecording };
