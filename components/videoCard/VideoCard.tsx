import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';
import { GoMute, GoUnmute, GoVerified } from 'react-icons/go';
import { Video } from '../../types';
interface Props {
  post: Video;
}
const VideoCard = ({ post }: Props) => {
  //Todo:useState,UseRef and UseEffect
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMute, setIsMute] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const onVideoPress = () => {
    if (isPlaying) {
      videoRef.current?.pause();
      setIsPlaying(false);
    } else {
      videoRef.current?.play();
      setIsPlaying(true);
    }
  };
  return (
    <div className="flex flex-col   mt-4 ">
      <div className="">
        <div className="flex gap-3 cursor-pointer font-semibold rounded">
          <div className="w-10 h-10 md:w-16 md:h-16">
            <Link href="/">
              <>
                <Image
                  src={post.postedBy.image}
                  width={62}
                  height={62}
                  className="rounded-full"
                  alt="profile "
                  layout="responsive"
                />
              </>
            </Link>
          </div>
          <div>
            {' '}
            <Link href="/">
              <div className="flex items-center gap-2 ">
                <p>{post.postedBy.userName}</p>
                <GoVerified className="text-md text-blue-400" />
                <p className="text-xs hidden md:block text-gray-400  font-medium">
                  {post.postedBy.userName}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative">
        <div
          className=" "
          onMouseEnter={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
        >
          <Link href="/">
            <video
              loop
              ref={videoRef}
              className="  border-2 w-full rounded-3xl"
              src={post.video.asset.url}
              onClick={onVideoPress}
            />
            {isHover && (
              <div className="flex text-2xl text-white ">
                <div className=" absolute left-40  bottom-10 ">
                  {isMute ? (
                    <button
                      aria-label="unMute"
                      onClick={() => setIsMute(false)}
                    >
                      <GoUnmute />
                    </button>
                  ) : (
                    <button
                      aria-label="Mute"
                      onClick={() => setIsMute(true)}
                    >
                      <GoMute />
                    </button>
                  )}
                </div>
                <div className="absolute right-40  bottom-10 ">
                  {' '}
                  {isPlaying ? (
                    <button aria-label="Pause" onClick={onVideoPress}>
                      <FaPause />
                    </button>
                  ) : (
                    <button aria-label="Play" onClick={onVideoPress}>
                      <FaPlay />
                    </button>
                  )}
                </div>
              </div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
