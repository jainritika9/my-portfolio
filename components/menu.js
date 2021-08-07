import Dropdown from "@material-tailwind/react/Dropdown"
import DropdownItem from "@material-tailwind/react/DropdownItem"
import {Link } from 'react-scroll';
import Icon from "@material-tailwind/react/Icon";
function Menu() {
    return (
        <div>
            <Dropdown
            color="blueGray"
            placement="bottom-start"
            buttonText={<Icon name='menu' className='h-6 w-6'/>}
            buttonType="filled"
            size="regular"
            block={false}
            ripple="dark"
           >
            
            <Link activeClass="active" to="Home" spy={true} smooth={true} offset={-50} duration={500}>
            <DropdownItem>
                Home
            </DropdownItem></Link>
            <Link activeClass="active" to="About" spy={true} smooth={true} offset={-50} duration={500}>
            <DropdownItem>
                About
            </DropdownItem></Link>
            <Link activeClass="active" to="Skills" spy={true} smooth={true} offset={-50} duration={500}>
            <DropdownItem>
                Skills
            </DropdownItem></Link>
            <Link activeClass="active" to="Work" spy={true} smooth={true} offset={-50} duration={500}>
            <DropdownItem>
                Work
            </DropdownItem></Link>
            <Link activeClass="active" to="Contact" spy={true} smooth={true} offset={-50} duration={500}>
            <DropdownItem>
               Contact
            </DropdownItem></Link>
        </Dropdown>
        </div>
    )
}

export default Menu
