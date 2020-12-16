import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import Button from '@material-ui/core/Button';

import SERVER_URL from '../../utils/constants';

export default function UserSelector() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [userChoice,setUserChoice] = React.useState("");
  const loading = open && options.length === 0;


  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await axios.post(`${SERVER_URL}/getAllData`);
      
      const users = await response.data;
      console.log(users);

      if(userChoice === "")
        setUserChoice(users[0].username);

      if (active) {
        const opt = users.map((user) => {
          const firstLetter = user.username[0].toUpperCase();
          return {
            firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
            name: user.username
          };
        });

        setOptions(opt);
      }

    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <div className="user-search-container" >
     <h1>Search For a User</h1> 
    <Autocomplete
        value={userChoice}
        onChange={(e,v) => {setUserChoice(v)} }
        id="asynchronous-demo"
        className="user-search"
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        getOptionSelected={(option, value) => option.name === value.name}
        getOptionLabel={(option) => option.name}
        options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
        groupBy={(option) => option.firstLetter}
        loading={loading}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Find User"
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
    />
    <Button className="search-btn" size="large" variant="contained" color="primary" href={`/profile/${userChoice.name}`}>
    Search
    </Button>
    </div>
  );
}
