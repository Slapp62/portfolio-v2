const RightSide = (props: {children: React.ReactNode}) => {
  return (
    <div className="lg:w-[40%] w-full flex flex-col gap-10">
      {props.children}
    </div>
  )
}

export default RightSide