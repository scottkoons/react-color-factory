import React, { useState } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import Colors from './Colors';
import Color from './Color';
import NewColor from './NewColor';

const Routes = ({ colors }) => {
  const history = useHistory();
  const [colorList, setColorList] = useState(colors);
  const addColor = (name, value) => {
    const newColor = { name, value };
    setColorList((oldColors) => [...oldColors, newColor]);
    history.push('/colors');
  };
  return (
    <Switch>
      <Route exact path='/colors'>
        <Colors colors={colorList} />
      </Route>
      <Route exact path='/colors/new'>
        <NewColor addColor={addColor} />
      </Route>
      <Route path='/colors/:color'>
        <Color colors={colorList} />
      </Route>
      <Redirect to='/colors' />
    </Switch>
  );
};

export default Routes;