import React from 'react'

import Select from 'react-select';


export default function SelectBox(props) {
    
    const {colourOptions,prefix} = props;

    // const selectStyles = { menu: base => ({
    //     ...base,
    //     // override border radius to match the box
    //     borderRadius: 0,
    //     // kill the gap
    //     marginTop: 0,
    //     zIndex: 1
    //     }) };

    return (
      <div>
        <Select
          className="col-md-6 mb-3 my-5 mx-5"
          classNamePrefix="select"
          placeholder={prefix}
          isClearable={true}
          isSearchable={true}
          name="color"
          options={colourOptions}
        />
  
        </div>
    );
}
