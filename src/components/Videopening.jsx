import vOpening from "../assets/Video/opening.mp4";

const Videopening = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <video
        className="w-full max-w-4xl"
        autoPlay
        muted
        loop
        controls
      >
        <source src={vOpening}  type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Videopening;
