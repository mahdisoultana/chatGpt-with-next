import { motion } from 'framer-motion';
import Image from 'next/image';
function MessageLoading() {
  const isMe = (i: 'me' | 'chatGPT') => i == 'me';
  const order = {
    right: ' rounded-tr-none',
    left: ' rounded-tl-none order-1',
  };
  // usePlayAudio();
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      layout
      variants={{
        animate: {
          opacity: 1,
        },
        initial: { opacity: 0 },
        exit: { opacity: 0 },
      }}
      className="flex  justify-end  items-start "
    >
      <p
        className={` ${
          isMe('chatGPT') ? order.left : order.right
        } rounded-xl h-[40px] text-sm tracking-wide    p-1 pl-3 w-[80px] flex  items-center justify-center bg-gray-800`}
      >
        {[1, 2, 3].map((_, index) => (
          <motion.span
            key={index}
            animate={{
              y: [5, -5],
              transition: {
                duration: 1,
                delay: index * 0.3,
                repeat: Infinity,
                repeatType: 'mirror',
              },
            }}
            className="w-[15px] h-[15px]  rounded-full bg-gray-700 block mr-[7px] flex-shrink-0"
          />
        ))}
      </p>

      <span
        className={` block w-10  h-10 ${
          isMe('chatGPT') ? 'rounded-md' : 'rounded-full'
        }  flex-shrink-0 mx-2`}
      >
        <Image
          width={100}
          height={100}
          src="/jane.jpg"
          className="h-full w-full rounded-full"
          alt="profile"
        />
      </span>
    </motion.div>
  );
}

export default MessageLoading;

const gptIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    imageRendering="optimizeQuality"
    fillRule="evenodd"
    clipRule="evenodd"
    viewBox="0 0 512 512"
  >
    <rect fill="#10A37F" width="512" height="512" rx="104.187" ry="105.042" />
    <path
      fill="#fff"
      fillRule="nonzero"
      d="M378.68 230.011a71.432 71.432 0 003.654-22.541 71.383 71.383 0 00-9.783-36.064c-12.871-22.404-36.747-36.236-62.587-36.236a72.31 72.31 0 00-15.145 1.604 71.362 71.362 0 00-53.37-23.991h-.453l-.17.001c-31.297 0-59.052 20.195-68.673 49.967a71.372 71.372 0 00-47.709 34.618 72.224 72.224 0 00-9.755 36.226 72.204 72.204 0 0018.628 48.395 71.395 71.395 0 00-3.655 22.541 71.388 71.388 0 009.783 36.064 72.187 72.187 0 0077.728 34.631 71.375 71.375 0 0053.374 23.992H271l.184-.001c31.314 0 59.06-20.196 68.681-49.995a71.384 71.384 0 0047.71-34.619 72.107 72.107 0 009.736-36.194 72.201 72.201 0 00-18.628-48.394l-.003-.004zM271.018 380.492h-.074a53.576 53.576 0 01-34.287-12.423 44.928 44.928 0 001.694-.96l57.032-32.943a9.278 9.278 0 004.688-8.06v-80.459l24.106 13.919a.859.859 0 01.469.661v66.586c-.033 29.604-24.022 53.619-53.628 53.679zm-115.329-49.257a53.563 53.563 0 01-7.196-26.798c0-3.069.268-6.146.79-9.17.424.254 1.164.706 1.695 1.011l57.032 32.943a9.289 9.289 0 009.37-.002l69.63-40.205v27.839l.001.048a.864.864 0 01-.345.691l-57.654 33.288a53.791 53.791 0 01-26.817 7.17 53.746 53.746 0 01-46.506-26.818v.003zm-15.004-124.506a53.5 53.5 0 0127.941-23.534c0 .491-.028 1.361-.028 1.965v65.887l-.001.054a9.27 9.27 0 004.681 8.053l69.63 40.199-24.105 13.919a.864.864 0 01-.813.074l-57.66-33.316a53.746 53.746 0 01-26.805-46.5 53.787 53.787 0 017.163-26.798l-.003-.003zm198.055 46.089l-69.63-40.204 24.106-13.914a.863.863 0 01.813-.074l57.659 33.288a53.71 53.71 0 0126.835 46.491c0 22.489-14.033 42.612-35.133 50.379v-67.857c.003-.025.003-.051.003-.076a9.265 9.265 0 00-4.653-8.033zm23.993-36.111a81.919 81.919 0 00-1.694-1.01l-57.032-32.944a9.31 9.31 0 00-4.684-1.266 9.31 9.31 0 00-4.684 1.266l-69.631 40.205v-27.839l-.001-.048c0-.272.129-.528.346-.691l57.654-33.26a53.696 53.696 0 0126.816-7.177c29.644 0 53.684 24.04 53.684 53.684a53.91 53.91 0 01-.774 9.077v.003zm-150.831 49.618l-24.111-13.919a.859.859 0 01-.469-.661v-66.587c.013-29.628 24.053-53.648 53.684-53.648a53.719 53.719 0 0134.349 12.426c-.434.237-1.191.655-1.694.96l-57.032 32.943a9.272 9.272 0 00-4.687 8.057v.053l-.04 80.376zm13.095-28.233l31.012-17.912 31.012 17.9v35.812l-31.012 17.901-31.012-17.901v-35.8z"
    />
  </svg>
);

import { Howl } from 'howler';
import { useEffect } from 'react';
function usePlayAudio() {
  useEffect(() => {
    // Create a new Howl instance
    const sound = new Howl({
      src: ['path/sound.mp3'],
      autoplay: true,
      loop: true,
      volume: 0.5,
      rate: 0.45,
    });

    // Start playing the sound
    sound.play();

    // Clean up function to stop the sound when the component unmounts
    return () => {
      sound.stop();
    };
  }, []);
}
