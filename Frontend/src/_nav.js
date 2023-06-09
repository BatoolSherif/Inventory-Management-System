import React from 'react'
import CIcon from '@coreui/icons-react'
import { freeSet } from '@coreui/icons'
import { CNavItem ,CNavTitle} from '@coreui/react'
import { getAuthUser } from "../src/helper/Storage";
const auth = getAuthUser();
const _nav = [
  {
    component: CNavTitle,
    name: auth[0].Email,
    //icon: <CIcon icon={freeSet.cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Products',
    to: '/Products',
    icon: <CIcon icon={freeSet.cilApplications} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Warehouses',
    to: '/Warehouses',
    icon: <CIcon icon={freeSet.cilHome} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Requests',
    to: '/Requests',
    icon: <CIcon icon={freeSet.cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Users',
    to: '/Users',
    icon: <CIcon icon={freeSet.cilGroup} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'LOG OUT',
    to: '/Login',
    icon: <CIcon icon={freeSet.cilAccountLogout} customClassName="nav-icon" />,
  },
]

export default _nav
