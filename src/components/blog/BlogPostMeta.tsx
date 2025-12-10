
import { Calendar, Clock, User } from "lucide-react";

interface BlogPostMetaProps {
  category: string;
  date: string;
  readTime: string;
  author: string;
}

export const BlogPostMeta = ({ category, date, readTime, author }: BlogPostMetaProps) => {
  return (
    <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
      <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-xs font-medium">
        {category}
      </span>
      <div className="flex items-center gap-1">
        <Calendar className="w-4 h-4" />
        {date}
      </div>
      <div className="flex items-center gap-1">
        <Clock className="w-4 h-4" />
        {readTime}
      </div>
      <div className="flex items-center gap-1">
        <User className="w-4 h-4" />
        {author}
      </div>
    </div>
  );
};
