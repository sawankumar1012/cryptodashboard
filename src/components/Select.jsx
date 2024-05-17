import React, { forwardRef } from "react";
import Select from "react-select";
import { DropDownIcon } from "./icons/DropDownIcon";

const SelectComponent = forwardRef(
  (
    { children, className, variant = "fill", size = "md", color = "white" , isMulti=false,isSearchable=false,indicator,shape='rounded',isMultiValueRemoveDisabled=false,options,...rest },
    ref
  ) => {
    const [menuPortalTarget, setMenuPortalTarget] = React.useState(null);

    React.useEffect(() => {
      setMenuPortalTarget(document.body);
    }, []);

    const variants = {
      fill: {
        white: "bg-white text",
        black: "bg-black text-white",
        gray:'bg-gray-200 text-gray-400 border-0'
      },
      outline: {
        white: "border border-white text",
        black: "border border-black text",
        gray:'border border-gray-200'
      },
    };

    const sizes = {
      sm: "h-[40px] min-w-[100px] py-1 px-2",
      md: "40px max-w-[200px] min-w-[150px]",
      lg: "h-[80px] min-w-[200px] py-3 px-4",
    };
    const shapes ={
      rounded:'rounded-md'
    }
    return (
      <>
        <Select
        options={options}
          ref={ref}
          className={`${className} ${sizes[size]} ${variants[variant][color]} ${shapes[shape]} -pb-4`}
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () =>null,
            ClearIndicator:()=>null,
          }}

          styles={{
            container: (provided) => ({
              ...provided,
              display: "flex",
              
              padding:0,
              
              zIndex: 0,
            }),
            singleValue:(provided)=>({
              ...provided,
              color:'rgb(82,82,82)',
              fontWeight:'400',
              paddingLeft:'4px'
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",
              boxShadow: "0 !important",
              minHeight: "auto",
              width: "100%",
              "&:hover": {
                border: "0 !important",
              },
            }),
            input: (provided) => ({
              ...provided,
              color: 'inherit',
             height:'inherit',
              padding: 0,
            }),
            multiValueLabel:(provided)=>({
              ...provided,
              color:'white',
              paddingRight:'6px',
            }),
            multiValueRemove:(provided,data)=>{
              console.log('remove>>',data)
            if(isMultiValueRemoveDisabled){
              return({
                ...provided,
                display:'none',
              })
            }
              return ({
                ...provided,
              })
            },
            multiValue:(provided)=>({
              ...provided,
              color:'white',
              background:'gray',
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected ? "#ffffff" : "transparent",
              color: state.isSelected ? "#100f0d" : "inherit",
              "&:hover": {
                backgroundColor: "#ffffff",
                color: "#100f0d",
              },
            }),
            valueContainer: (provided) => ({
              ...provided,
              
              
              
            }),
            dropdownIndicator:(provided)=>({
              ...provided,
              color:'gray'
            }),
            placeholder: (provided) => ({
              ...provided,
              margin: 0,
            }),
          
          }}
          menuPortalTarget={menuPortalTarget}
          closeMenuOnScroll={(event) => {
            return event.target.id === "scrollContainer";}}
          { ...rest }
        >
          {children}
        </Select>
      </>
    );
  }
);
export default SelectComponent;

{/* Select.jsx */}