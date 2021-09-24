import React, {useState} from 'react';
import {Form, Icon, Image, Input, Menu} from 'semantic-ui-react';
import './HeaderNav.scss';
import logo from '../../assets/images/logo.jpg';
import {Link, withRouter, useHistory} from 'react-router-dom';

export function HeaderNav() {
const [searchQuery, setSearchQuery] = useState("");
let history = useHistory();

const InputChange = e => {
  setSearchQuery(e.target.value);
}

const Submit = () => {
  const escapedSearchQuery = encodeURI(searchQuery);
  history.push(`/results?search_query=${escapedSearchQuery}`);
};
    return (
      // 1
      <Menu borderless className='top-menu' fixed='top'>
        {/* 2 */}
        <Menu.Item header className='logo'>
          <Link to='/'><Image src={logo} size='small'/></Link>
        </Menu.Item>
        {/* 3 */}
        <Menu.Menu className='nav-container'>
          <Menu.Item className='search-input'>
            <Form onSubmit={Submit}>
              {/* 4 */}
              <Form.Field>
                <Input placeholder='Search'
                       size='small'
                       action='Go'
                       value={searchQuery}
                       onChange={InputChange}
                />
              </Form.Field>
            </Form>
          </Menu.Item>
          {/* 5 */}
          <Menu.Menu position='right'>
            <Menu.Item>
              {/* 6 */}
              <Icon className='header-icon' name='video camera' size='large'/>
            </Menu.Item>
            <Menu.Item>
              <Icon className='header-icon' name='grid layout' size='large'/>
            </Menu.Item>
            <Menu.Item>
              <Icon className='header-icon' name='chat' size='large'/>
            </Menu.Item>
            <Menu.Item>
              <Icon className='header-icon' name='alarm' size='large'/>
            </Menu.Item>
            {/* 7*/}
            <Menu.Item name='avatar'>
              <Image src='https://via.placeholder.com/80x80' avatar/>
            </Menu.Item>
          </Menu.Menu>
        </Menu.Menu>
      </Menu>
    );
  }

export default withRouter(HeaderNav);