type Props = {
  title: string;
  value: string;
};
export default function CustomerInfo({ title, value }: Props) {
  return (
    <p className="flex items-end justify-between gap-3 text-nowrap text-sm leading-8">
      <span>{title}</span>
      <hr className="mb-3 w-full border-dashed" />
      <span>{value}</span>
    </p>
  );
}
