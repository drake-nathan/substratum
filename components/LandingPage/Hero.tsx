interface Props {
  width: number;
}

const Hero = ({ width }: Props) => (
  <div
    className="mt-20 flex max-w-[calc(100%-180px)] flex-col max-sm:mt-8 max-sm:max-w-[calc(100%-3em)]"
    style={{ width }}
  >
    <h1 className="-mb-3 font-exo text-[2.75rem] font-extralight leading-[60px] tracking-[1px] max-sm:text-[1.75rem]">
      sub·stra·tum
    </h1>
    <h4 className="text-[1.375rem] font-medium lowercase italic max-sm:text-base">
      noun
    </h4>
    <hr className="my-2 w-[2.125rem] border-[0.5px] border-black dark:border-white" />

    <ul className="mb-10 list-none max-sm:mb-6">
      <li>
        <p className="text-lg leading-[1.375rem] max-sm:text-base">
          An underlying layer or substance
        </p>
      </li>

      <li>
        <p className="text-lg leading-[1.375rem] max-sm:text-base">
          A foundation or basis of something
        </p>
      </li>
    </ul>

    <p className="mb-3 max-w-[60ch] text-base font-light leading-5 max-sm:text-xs">
      Substratum is a platform built from the ground up to support dynamic and
      experimental crypto art projects.
    </p>

    <p className="mb-3 max-w-[60ch] text-base font-light leading-5 max-sm:text-xs">
      (It works great for regular projects, too.)
    </p>
  </div>
);

export default Hero;
