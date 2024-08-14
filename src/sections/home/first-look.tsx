/* eslint-disable @next/next/no-img-element */

export default function FirstLook() {
  return (
    <section className="relative mt-16 h-[calc(100vh-64px)]">
      <h1 className="text-center text-[150px] font-bold lg:text-[250px]">
        VIET ANH
      </h1>
      <img
        src="/me.png"
        alt="It's me"
        className="absolute bottom-0 left-1/2 h-full -translate-x-1/2 animate-fade object-cover lg:h-[130%]"
      />
    </section>
  );
}
