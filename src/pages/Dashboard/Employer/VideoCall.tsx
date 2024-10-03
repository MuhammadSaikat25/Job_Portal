import VideoCallUi from "../../../components/Dashboard/Employer/video-call/VideoCallUi";

const VideoCall = () => {
  return (
    <div className="bg-gray-300 h-screen p-10 py-32">
      <p className="text-[20px] text-gray-950 font-semibold lg:pl-20">
        Create a room for interview
      </p>
      <VideoCallUi />
    </div>
  );
};

export default VideoCall;
