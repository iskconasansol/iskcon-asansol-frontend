import { cn } from '@/lib/utils';

type Props = {
  className?: string;
};

const CowIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      viewBox="0 0 512.084 512.084"
      className={cn('w-6 h-6', className)}
    >
      <path d="M167.15 216.164l-.147.001c-8.8.08-15.894 7.304-15.813 16.104.08 8.751 7.223 15.814 15.957 15.814l.147-.001c8.8-.08 15.894-7.304 15.813-16.104-.081-8.75-7.224-15.814-15.957-15.814zm174.957-1.591a15.854 15.854 0 00-11.242 4.777 15.854 15.854 0 00-4.572 11.327c.08 8.751 7.224 15.815 15.958 15.815l.146-.001a15.854 15.854 0 0011.242-4.777 15.85 15.85 0 004.571-11.326 15.852 15.852 0 00-4.776-11.243c-3.041-2.987-7.036-4.635-11.327-4.572z"></path>
      <path d="M480.906 179.737c-12.916-6.873-31.028-13.784-40.826-13.784l-.186.001c-8.059.073-14.814 5.083-21.347 9.927-8.643 6.409-14.484 10.332-21.274 7.837 1.35-14.806 2.197-26.406 2.546-33.413 20.855-5.981 84.437-25.571 102.658-46.921 10.36-12.139 12.352-32.31 5.919-59.952-4.507-19.371-11.552-35.425-11.85-36.099a8.002 8.002 0 00-15.23 2.049c-1.864 12.458-8.298 47.675-15.551 60.783-.192.279-5.18 6.897-46.277 13.611-21.942 3.585-42.933 5.338-43.143 5.356a8.01 8.01 0 00-2.125.479c-6.026-5.271-12.896-9.74-20.407-13.06-25.323-11.193-67.129-15.181-97.811-15.181s-72.488 3.988-97.811 15.181c-7.503 3.316-14.365 7.778-20.385 13.041a7.98 7.98 0 00-2.07-.46c-.209-.017-21.2-1.771-43.143-5.355-41.095-6.714-46.083-13.332-46.242-13.555-7.286-13.164-13.72-48.38-15.584-60.839a8 8 0 00-15.23-2.049c-.298.674-7.343 16.728-11.85 36.099-6.432 27.642-4.44 47.813 5.919 59.952 18.554 21.74 83.313 41.775 102.604 47.372.377 7.33 1.27 19.391 2.684 34.709-7.046 3.181-13.063-.662-22.126-7.131-6.62-4.725-13.5-9.588-21.524-9.538-9.753.088-27.884 7.375-40.754 14.526C10.16 194.62-.097 206.033.005 217.244c.142 15.645 29.841 35.235 56.406 43.033 9.444 2.772 18.441 4.136 26.836 4.135 15.304-.001 28.579-4.557 38.86-13.349 9.334 73.744 25.198 166.364 47.867 214.231.129.273.284.524.439.775-.906 10.113 2.057 20.16 8.504 28.264 7.69 9.667 19.161 15.107 31.453 15.035l93.552.15h.086c12.353-.112 23.747-5.801 31.26-15.606 6.754-8.815 9.465-19.792 7.691-30.606 22.403-48.903 38.053-141.372 47.221-214.466 10.174 8.535 23.164 12.945 38.058 12.945 8.79 0 18.237-1.528 28.149-4.635 26.42-8.279 55.758-28.406 55.616-44.052-.102-11.21-10.564-22.434-31.097-33.361zm-58.022-80.303c43.867-7.247 53.423-15.277 56.848-21.464 4.726-8.538 8.755-23.017 11.745-36.266.484 1.819.95 3.683 1.388 5.575 5.013 21.676 4.105 37.913-2.557 45.719-13.036 15.275-63.388 32.591-90.855 40.744-1.543-10.323-5.805-20.497-12.16-29.584 8.56-.894 21.806-2.447 35.591-4.724zM21.776 92.997c-6.662-7.806-7.569-24.042-2.557-45.719.438-1.892.904-3.755 1.388-5.575 2.99 13.25 7.02 27.728 11.745 36.266 3.424 6.187 12.98 14.217 56.848 21.464 13.747 2.271 26.958 3.822 35.521 4.716-6.443 9.21-10.733 19.537-12.223 30.005-26.866-8.08-77.529-25.698-90.722-41.157zm97.317 137.483c-6.799 10.375-20.701 21.704-48.318 16.781-12.517-2.233-26.362-7.726-37.984-15.07-11.479-7.253-16.191-13.314-16.781-15.279.211-3.096 6.206-10.686 22.252-19.604 14.577-8.1 28.605-12.472 33.127-12.513h.031c2.859 0 7.743 3.485 12.052 6.562 8.417 6.008 19.532 13.931 33.011 10.481.885 8.708 1.902 18.112 3.053 28.033a8.87 8.87 0 00-.443.609zm203.474 253.7c-4.487 5.857-11.289 9.259-18.665 9.338l-93.592-.149c-7.385.052-14.27-3.211-18.872-8.997-4.602-5.785-6.25-13.225-4.523-20.412l6.217-25.867a33.493 33.493 0 015.538-11.99c.559 2.822 1.574 5.365 2.842 7.387 2.254 3.595 5.558 6.595 8.753 9.496 2.292 2.081 6.558 5.954 6.755 7.451-.003.015-.431 1.609-4.593 4.508a8 8 0 109.146 13.127c7.286-5.077 11.019-10.5 11.41-16.578.577-8.969-6.376-15.282-11.964-20.355-2.393-2.173-4.868-4.42-5.952-6.148-.849-1.355-1.364-4.559-.121-7.052 1.616-3.242 5.855-4.355 9.296-4.707l63.237.395c3.5.25 7.986 1.248 9.716 4.565 1.288 2.47.831 5.683.007 7.052-1.049 1.743-3.352 3.986-5.578 6.156-5.32 5.184-11.941 11.636-11.128 20.545.557 6.1 4.449 11.492 11.899 16.484a7.964 7.964 0 004.446 1.355 8 8 0 004.46-14.647c-4.393-2.943-4.868-4.629-4.871-4.629.076-1.525 4.32-5.661 6.36-7.648 2.953-2.878 6.007-5.854 8.12-9.364 1.299-2.158 2.298-4.897 2.779-7.917 2.933 3.556 5.145 7.746 6.344 12.361l6.687 25.75c1.857 7.154.344 14.623-4.153 20.49zm13.708-47.348l-.757-2.914c-5.477-21.088-25.091-36.288-46.74-36.288l-.356.001-64.098-.401a7.769 7.769 0 00-.483-.003l-.564-.004h-.123c-21.628.196-40.371 15.464-45.578 37.128l-1.097 4.564c-15.413-43.145-26.779-106.952-33.942-156.278-9.303-64.056-14.406-123.697-14.534-137.707a8.076 8.076 0 00-.044-.751c-1.02-20.56 14.639-43.244 36.703-52.997 18.986-8.392 54.84-13.815 91.342-13.815s72.355 5.423 91.342 13.815c21.394 9.457 36.767 31.072 36.751 51.119a7.955 7.955 0 00-.103 3.35c-.284 15.231-5.372 73.972-14.523 136.986-7.048 48.533-18.16 111.099-33.196 154.195zm143.22-208.193c-11.487 7.554-25.229 13.298-37.704 15.758-27.522 5.425-41.63-5.65-48.616-15.9a8.007 8.007 0 00-.474-.625c1.14-9.916 2.145-19.297 3.017-27.958 13.33 2.919 24.147-5.09 32.36-11.181 4.269-3.166 9.108-6.754 11.962-6.78h.067c4.594 0 18.633 4.113 33.282 11.909 16.207 8.624 22.337 16.104 22.605 19.195-.553 1.976-5.154 8.121-16.499 15.582z"></path>
      <path d="M331.146 116.693a8 8 0 00-.493-11.303 8 8 0 00-11.303.493c-6.189 6.754-39.081 24.028-62.963 28.755l5.006-20.829a7.999 7.999 0 00-12.487-8.337c-12.25 8.919-61.951 30.912-98.545 31.245a8 8 0 00.071 15.999h.074c30.515-.277 68.308-13.85 91.053-24.853l-3.393 14.115a7.998 7.998 0 007.779 9.87h.073c28.111-.256 74.936-24.034 85.128-35.155zm2.357 34.36a7.964 7.964 0 004.606-1.464c7.124-5.028 16.346-16.292 17.375-17.561a8 8 0 00-1.174-11.25 7.999 7.999 0 00-11.252 1.172c-2.412 2.971-9.661 11.381-14.175 14.567a8.001 8.001 0 004.62 14.536z"></path>
    </svg>
  );
};

export default CowIcon;