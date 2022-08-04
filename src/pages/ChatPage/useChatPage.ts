import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import useRouteInfo from '@/hooks/useRouteInfo';
import { getShopInfo } from '@/redux/shop';

import type { IVideoSubmitInfo } from '@/components/ChatVideoUploadScreen';
import type { AppDispatch } from '@/redux/store';

const useChatPage = () => {
  const [video, setVideo] = useState<IVideoSubmitInfo | null>(null);
  const onVideoSubmit = (videoInfo: IVideoSubmitInfo) => {
    setVideo(videoInfo);
  };

  const onGoBackToVideoUpload = () => {
    if (video?.src) {
      URL.revokeObjectURL(video.src);
    }
    setVideo(null);
  };

  // load creator info when necessary
  const { pathMatch } = useRouteInfo();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (pathMatch?.params.username) {
      dispatch(getShopInfo(pathMatch?.params.username));
    }
  }, [dispatch, pathMatch?.params.username]);

  return { video, onVideoSubmit, onGoBackToVideoUpload };
};

export default useChatPage;
