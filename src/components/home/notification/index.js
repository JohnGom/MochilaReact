import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { UpdateInfoNotifAction } from '../../../actions/index.js';

class NotificationComponent extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="container">
      <Card>
       <CardMedia>
       <form className="container">
         <div class="form-group">
          <SelectField
            floatingLabelText="Idioma"
            value={this.props.language}
            onChange={(event, index, value) => this.props.UpdateInfoNotifAction({ prop: 'language', value })}
          >
            <MenuItem value={'es'} primaryText="Español" />
            <MenuItem value={'en'} primaryText="Ingles" />
            <MenuItem value={'fr'} primaryText="Frances" />
          </SelectField>
         </div>
         <div class="form-group">
           <TextField hintText="Titulo" floatingLabelText="Titulo de la notificacion"
           onChange={(event) => this.props.UpdateInfoNotifAction({ prop: 'title', value: event.target.value })} />
          </div>
          <div class="form-group">
           <TextField hintText="Mensaje" floatingLabelText="Mensaje de la notificacion" fullWidth={true}
           onChange={(event) => this.props.UpdateInfoNotifAction({ prop: 'message', value: event.target.value })} />
         </div>
         <div class="form-group">
           <p>Enviar a: </p>
           <RadioButtonGroup
           onChange={(event) => this.props.UpdateInfoNotifAction({ prop: 'group', value: event.target.value })}
           name="shipSpeed">
            <RadioButton
              value="all"
              label="Todos"
            />
            <RadioButton
              value="child"
              label="Niños"
            />
            <RadioButton
              value="teacher"
              label="Maestras"
            />
           </RadioButtonGroup>
         </div>
         <div class="form-group">
          <SelectField
            floatingLabelText="Tipo"
            value={this.props.type}
            onChange={(event, index, value) => this.props.UpdateInfoNotifAction({ prop: 'type', value })}
          >
            <MenuItem value={'es'} primaryText="General" />
            <MenuItem value={'en'} primaryText="Social" />
            <MenuItem value={'fr'} primaryText="Ranking" />
          </SelectField>
         </div>
         </form>
       </CardMedia>
       <CardActions>
       <RaisedButton label="Enviar" primary={true} />
       </CardActions>
      </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { title, message, language, group, type } = state.notif;
  return { title, message, language, group, type }
};

export default connect(mapStateToProps,
{ UpdateInfoNotifAction })(NotificationComponent);
