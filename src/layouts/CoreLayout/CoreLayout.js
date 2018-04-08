import React from 'react'
import Header from '../../components/Header'
import {StickyContainer, Sticky} from 'react-sticky';
import './CoreLayout.scss'
import '../../styles/core.scss'
import {Container, Modal} from "semantic-ui-react";
import AgencyModal from '../../components/AgencyModal'

export const CoreLayout = ({children}) => (
    <div>
        <Header />
        <AgencyModal/>
        <Container>
            <div className='core-layout__viewport'>
                <StickyContainer>
                    {children}
                </StickyContainer>
            </div>
        </Container>
    </div>
);

CoreLayout.propTypes = {
    children: React.PropTypes.element.isRequired
};

export default CoreLayout
