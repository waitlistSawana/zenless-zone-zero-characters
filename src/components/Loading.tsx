import RippleLoader from "./loading/RippleLoader";

export function Loading() {
  return (
    <div className="mx-auto flex h-96 w-96 items-center justify-center">
      <RippleLoader />
    </div>
  );
}
