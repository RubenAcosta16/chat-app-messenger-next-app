import { useParams } from "next/navigation";
import { useMemo } from "react";

//use memo es practicamente un useEffect con return

const useConversation = () => {
  const params = useParams();

  const conversationId = useMemo(() => {
    if (!params?.conversationId) {
      return '';
    }

    return params.conversationId as string;
  }, [params?.conversationId]);

  //the double !! means turn que conversationId in to a boolean
  const isOpen = useMemo(() => 
  !!conversationId, [conversationId]);

  return useMemo(() => ({
    isOpen,
    conversationId
  }), [isOpen, conversationId]);
};

export default useConversation;