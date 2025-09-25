const LeftSide = (props: {children: React.ReactNode}) => {
  return (
    <div className="md:w-1/2 w-full h-full flex flex-col items-center justify-center mr-auto fixed">
      {props.children}
    </div>
  )
}

export default LeftSide