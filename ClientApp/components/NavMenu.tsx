
import * as React from 'react';
import {
  Nav,
  INavProps
} from 'office-ui-fabric-react';
import './Nav.Basic.Example.scss';

export class NavBasicExample extends React.Component<any, any> {
  constructor(props: INavProps) {
    super(props);
    this._onClickHandler = this._onClickHandler.bind(this);
  }

  public render() {
    return (
      <div className='ms-NavExample-LeftPane'>
        <Nav
          groups={
            [
              {
                links:
                [
                  {
                  name: 'Home',
                  url: 'http://example.com',
                  links: [{
                    name: 'Activity',
                    url: 'http://msn.com',
                    key: 'key1'
                    },
                    {
                      name: 'News',
                      url: 'http://msn.com',
                      key: 'key2'
                    }],
                  isExpanded: true
                  },
                  { name: 'Documents', url: 'http://example.com', key: 'key3', isExpanded: true },
                  { name: 'Pages', url: 'http://msn.com', key: 'key4' },
                  { name: 'Notebook', url: 'http://msn.com', key: 'key5'  },
                  { name: 'Long Name Test for elipse', url: 'http://msn.com', key: 'key6' },
                  {
                    name: 'Edit',
                    url: 'http://cnn.com',
                    onClick: this._onClickHandler2,
                    icon: 'Edit',
                    key: 'key8'
                  }
                ]
              }
            ]
          }
          expandedStateText={ 'expanded' }
          collapsedStateText={'collapsed'}
          selectedKey={ 'key3' }
          />
       </div>
    );
  }

  private _onClickHandler(e: React.MouseEvent<HTMLElement>) {
    alert('test');
    return false;
  }

  private _onClickHandler2(e: React.MouseEvent<HTMLElement>) {
    return false;
  }
}



// import * as React from 'react';
// import { Nav } from 'office-ui-fabric-react'
// import { Link } from 'react-router';
// import './Nav.Basic.Example.scss';

// export class NavMenu extends React.Component<any, void> {
//     public render() {
//         return <div className='main-nav'>
//                 <div className='navbar navbar-inverse'>
//                 <div className='navbar-header'>
//                     <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
//                         <span className='sr-only'>Toggle navigation</span>
//                         <span className='icon-bar'></span>
//                         <span className='icon-bar'></span>
//                         <span className='icon-bar'></span>
//                     </button>
//                     <Link className='navbar-brand' to={ '/' }>UIBlocks</Link>
//                 </div>
//                 <div className='clearfix'></div>
//                 <div className='navbar-collapse collapse'>
//                     <ul className='nav navbar-nav'>
//                         <li>
//                             <Link to={ '/' } activeClassName='active'>
//                                 <span className='glyphicon glyphicon-home'></span> Home
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to={ '/counter' } activeClassName='active'>
//                                 <span className='glyphicon glyphicon-education'></span> Counter
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to={ '/fetchdata' } activeClassName='active'>
//                                 <span className='glyphicon glyphicon-th-list'></span> Fetch data
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>;
//     }
// }

