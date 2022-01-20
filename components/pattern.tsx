interface IPatternElement {
  x: number;
  y: number;
}

const Plus = ({ x, y }: IPatternElement) => (
  <svg
    width="30"
    height="31"
    x={x}
    y={y}
    viewBox="0 0 30 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.272762 15.5262C0.28421 16.9333 1.43435 18.0743 2.84168 18.0749L27.2424 18.0842C28.6497 18.0847 29.7813 16.9445 29.7698 15.5374C29.7584 14.1304 28.6082 12.9893 27.2009 12.9887L2.80022 12.9794C1.39289 12.9789 0.261314 14.1191 0.272762 15.5262Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.8322 30.2791C16.2393 30.2851 17.3946 29.1493 17.4126 27.7421L17.7255 3.34334C17.7435 1.93613 16.6175 0.790451 15.2104 0.784394C13.8033 0.778335 12.648 1.91419 12.6299 3.3214L12.3171 27.7201C12.299 29.1273 13.4251 30.273 14.8322 30.2791Z"
      fill="currentColor"
    />
  </svg>
);

const RightArrow = ({ x, y }: IPatternElement) => (
  <svg
    width="23"
    height="41"
    x={x}
    y={y}
    viewBox="0 0 23 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.774461 39.8044C1.76838 40.8005 3.38851 40.8091 4.39314 39.8236L22.2061 22.35C22.6925 21.873 22.9659 21.2227 22.9653 20.5444C22.9648 19.8661 22.6903 19.2163 22.2033 18.74L4.78609 1.70872C3.7799 0.724823 2.15978 0.735973 1.16745 1.73364C0.175133 2.7313 0.186383 4.33768 1.19258 5.32158L16.7653 20.5493L0.793854 36.2164C-0.210771 37.2019 -0.219454 38.8083 0.774461 39.8044Z"
      fill="currentColor"
    />
  </svg>
);

const Minus = ({ x, y }: IPatternElement) => (
  <svg
    width="30"
    height="6"
    x={x}
    y={y}
    viewBox="0 0 30 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.213313 3.00128C0.224761 4.40836 1.3749 5.54945 2.78223 5.54999L27.1829 5.5593C28.5902 5.55984 29.7218 4.41961 29.7104 3.01254C29.6989 1.60547 28.5488 0.464381 27.1415 0.463843L2.74077 0.45453C1.33344 0.453993 0.201865 1.59421 0.213313 3.00128Z"
      fill="currentColor"
    />
  </svg>
);

const Dot = ({ x, y }: IPatternElement) => (
  <svg
    width="9"
    height="10"
    x={x}
    y={y}
    viewBox="0 0 9 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      r="4.31552"
      transform="matrix(1 0 0 -1 4.47372 5.25528)"
      fill="currentColor"
    />
  </svg>
);

const Backslash = ({ x, y }: IPatternElement) => (
  <svg
    width="24"
    height="23"
    x={x}
    y={y}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.0562 21.9763C24.0485 20.9787 24.0372 19.3723 23.031 18.3884L5.16149 0.914776C4.15529 -0.069128 2.53517 -0.0579739 1.54285 0.93969C0.55053 1.93735 0.56178 3.54373 1.56798 4.52763L19.4375 22.0012C20.4437 22.9851 22.0639 22.974 23.0562 21.9763Z"
      fill="currentColor"
    />
  </svg>
);

const Pattern = ({}) => {
  return (
    <div>
      <svg className="absolute z-0 w-full h-full" width={500} height={500}>
        <defs>
          <pattern
            id="837c3e70-6c3a-44e6-8854-cc48c737b659"
            x={0}
            y={0}
            width={500}
            height={500}
            patternUnits="userSpaceOnUse"
            className="text-yellow-400"
          >
            <Backslash x={50} y={80} />
            <RightArrow x={50} y={370} />

            <Minus x={280} y={220} />
            <Minus x={180} y={460} />
            <Dot x={380} y={130} />
            <Plus x={320} y={420} />
          </pattern>
        </defs>
        <rect
          className="w-full h-1/3"
          fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
        />
      </svg>
    </div>
  );
};

export default Pattern;
