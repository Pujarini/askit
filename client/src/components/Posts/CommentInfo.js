import {
  ChatBubbleLeftRightIcon,
  BookmarkIcon,
  TrashIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

const CommentInfo = () => {
  const styles = {
    icon: "w-5 h-5 cursor-pointer text-slate-400",
    trash: "w-5 h-5 cursor-pointer text-red-400",
  };
  return (
    <div className="flex items-center gap-2 mt-5  mx-auto">
      <ChatBubbleLeftRightIcon className={styles.icon} />
      <PencilSquareIcon className={styles.icon} />
      <BookmarkIcon className={styles.icon} />
      <TrashIcon className={styles.trash} />
    </div>
  );
};

export default CommentInfo;
