import { useState } from "react";
import { Link } from "react-router-dom";

const CardComponent = ({ title, author, category, comments, id }) => {
  const [show, setShow] = useState(true);

  const showText = () => {
    if (show) {
      return title.slice(0, 25);
    }
    return title;
  };

  return (
    <div class="lg:max-w-full lg:flex mt-5 w-full">
      <div className="flex flex-col items-center justify-between rounded-t">
        <button className="rounded-full hover:bg-slate-100 bg-red-400 h-30 w-50 text-center">
          <img
            src="https://img.favpng.com/5/7/24/thumb-signal-gesture-computer-icons-clip-art-png-favpng-4BDss4yVvChmD8GwSVBiDiUgm.jpg"
            className="h-5 lg:auto lg:w-5  rounded-t lg:rounded-t-none lg:rounded-l  object-fill "
            alt="minions"
          />{" "}
        </button>
        <span>5</span>
        <img
          src="https://www.pngfind.com/pngs/m/420-4207654_imgflip-downvote-windows-10-videos-icon-hd-png.png"
          className="h-10 lg:auto lg:w-30 rounded-t lg:rounded-t-none lg:rounded-l  object-fill"
          alt="minions"
        />
      </div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-[#1A1A1B] rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-[700px]">
        <div className="mb-8">
          <div className="flex items-center">
            <img
              className="w-5 h-5 rounded-full mr-4"
              src="https://mirimstudent25.files.wordpress.com/2013/10/movietalk-despicableme630-jpg_002144.jpg"
              alt="Avatar of Jonathan Reinink"
            />
            <div className="text-sm">
              <span className="text-slate-500 leading-none mr-2 text-sm">
                {" "}
                Posted by {author}
              </span>
              <span className="text-slate-500 text-sm">Aug 18</span>
            </div>
          </div>

          <div>
            <Link to={`/react/post/${id}`}>
              <span className="text-2xl mb-2">{showText()}</span>
            </Link>
            {title.length > 20 && (
              <span
                onClick={() => setShow(!show)}
                className="text-sm text-slate-300 font-light cursor-pointer hover:underline m-1"
              >
                {show ? "Show More" : "Show Less"}
              </span>
            )}
            <button class="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-full m-2">
              {category}
            </button>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <p className="text-sm text-slate-500 flex items-center hover:underline cursor-pointer">
            {comments.length} comments
          </p>
          <p className="text-sm text-slate-500 flex items-center cursor-pointer">
            Save
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
