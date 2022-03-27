type Props = {
  value: string
}

export default function Title ({ value }: Props) {
  return (
    <div className=" text-center pt-20 flex justify-center items-center">
      <span className="text-6xl select-none">{'<'}</span>
      <span className="text-4xl mx-10 font-bold">{value}</span>
      <span className="text-6xl select-none">{'>'}</span>
    </div>
  )
};
