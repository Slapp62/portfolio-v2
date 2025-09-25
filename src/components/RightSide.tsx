const RightSide = (props: {children: React.ReactNode}) => {
  return (
    <div className="md:w-1/2 w-full flex flex-col ml-auto pt-10">
      {props.children}
    </div>
  )
}

export default RightSide