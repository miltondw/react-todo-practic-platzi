import "./TodoItem.css";
export default function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li>
      <span
        className={`check ${completed && "check--active"}`}
        onClick={onComplete}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          style={{
            enableBackground: "new 0 0 70 70",
          }}
          viewBox="0 0 70 70"
          width="1em"
          height="1em"
        >
          <path
            d="M26.474 70a6.972 6.972 0 0 1-5.557-2.764L3.049 43.639a6.971 6.971 0 0 1 11.116-8.414l11.752 15.518L55.474 3.285a6.977 6.977 0 0 1 9.604-2.232 6.969 6.969 0 0 1 2.23 9.602l-34.916 56.06A6.967 6.967 0 0 1 26.474 70z"
            style={{
              fill: `${completed ? "#4caf50" : "#010101"}`,
            }}
          />
        </svg>
      </span>
      <p className={` ${completed && "todo--completed"}`}>{text}</p>
      <span
        className={`delete `}
        onClick={onDelete}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          style={{
            enableBackground: "new 0 0 128 128",
          }}
          viewBox="0 0 128 128"
          width="1em"
          height="1em"
        >
          <circle
            cx={64}
            cy={64}
            r={64}
            
          />
          <path
            d="M100.3 90.4 73.9 64l26.3-26.4c.4-.4.4-1 0-1.4l-8.5-8.5c-.4-.4-1-.4-1.4 0L64 54.1 37.7 27.8c-.4-.4-1-.4-1.4 0l-8.5 8.5c-.4.4-.4 1 0 1.4L54 64 27.7 90.3c-.4.4-.4 1 0 1.4l8.5 8.5c.4.4 1.1.4 1.4 0L64 73.9l26.3 26.3c.4.4 1.1.4 1.5.1l8.5-8.5c.4-.4.4-1 0-1.4z"
            style={{
              fill: "#fff",
            }}
          />
        </svg>
      </span>
    </li>
  );
}
