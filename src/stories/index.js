import React from 'react';

import { storiesOf, setAddon } from '@storybook/react';
import { action } from './utils';
import { Button, Welcome } from '@storybook/react/demo';
import { linkTo } from '@storybook/addon-links';
import JSXAddon from 'storybook-addon-jsx';
import NavBar from "../components/NavBar/NavBar";
import QrForm from "../components/QrForm/QrForm";
import QrCode from "../components/QrCode/QrCode";
import { Input } from "reactstrap";

setAddon(JSXAddon);

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .addWithJSX('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
  .addWithJSX('generate code', () => <Button type="submit">Genereate QrCode</Button>);

storiesOf('NavBar', module)
  .addWithJSX('with create form', () => <NavBar />)

storiesOf('Input', module)
  .addWithJSX('Text area', () => <Input type="textarea" placeholder="Sample text area"/>)
  .addWithJSX('Text', () => <Input type="text" placeholder="Sample text"/>)
  .addWithJSX('File upload', () => <Input type="file"/>)

storiesOf('Label', module)
  .addWithJSX('Text area', () => <Input type="textarea" placeholder="Sample text"/>)


storiesOf('QrForm', module)
  .addWithJSX('with create form', () => <QrForm />)

storiesOf('QrCode', module)
  .addWithJSX('with qrcode', () => <QrCode qrValue="Sample value" />)