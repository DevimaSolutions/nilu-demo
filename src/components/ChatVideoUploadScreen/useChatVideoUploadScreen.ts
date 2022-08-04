import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useRouteInfo from '@/hooks/useRouteInfo';
import { getShopInfo, shopCreatorSelector, shopSelectedOptionSelector } from '@/redux/shop';

import type { IChatVideoUploadScreenProps, IVideoSubmitInfo } from './types';
import type { AppDispatch } from '@/redux/store';
import type { ChangeEvent } from 'react';

const MAX_VIDEO_DURATION = 30;

const useChatVideoUploadScreen = (onVideoSubmit: IChatVideoUploadScreenProps['onVideoSubmit']) => {
  const creator = useSelector(shopCreatorSelector);
  const selectedProductOption = useSelector(shopSelectedOptionSelector);
  const [error, setError] = useState<string | null>();
  const [isLoading, setLoading] = useState(false);

  const getVideoInfo = (file: File) =>
    new Promise<IVideoSubmitInfo>((res) => {
      // load
      const video = document.createElement('video');
      video.preload = 'metadata';

      video.onloadedmetadata = function () {
        console.log(video);
        res({
          src: video.src,
          duration: video.duration,
          width: video.videoWidth,
          height: video.videoHeight,
        });
      };

      video.src = URL.createObjectURL(file);
    });

  const onUploadVideo = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setError(null);
    if (!file) {
      return;
    }
    setLoading(true);

    const video = await getVideoInfo(file);
    if (video.duration > MAX_VIDEO_DURATION) {
      URL.revokeObjectURL(video.src);
      setError(`Video exceeds ${MAX_VIDEO_DURATION} seconds limit!`);
      setLoading(false);
      return;
    }
    onVideoSubmit(video);
  };

  // load creator info when necessary
  const { pathMatch } = useRouteInfo();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (pathMatch?.params.username) {
      dispatch(getShopInfo(pathMatch?.params.username));
    }
  }, [dispatch, pathMatch?.params.username]);

  return { creator, selectedProductOption, error, isLoading, onUploadVideo };
};

export default useChatVideoUploadScreen;
