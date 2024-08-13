"use client";

import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "next/navigation";

const Room = () => {
  const params = useParams();
  const { roomId } = params;

  const myMeeting = async (element: any) => {
    const appId = 139327012;
    const serverSecret =
      process.env.SERVERSECRET || "28b12f87447d3a98cb767d5fdcd4e380";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomId + "",
      Date.now().toString(),
      roomId + ""
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  };
  return <div ref={myMeeting} />;
};

export default Room;
