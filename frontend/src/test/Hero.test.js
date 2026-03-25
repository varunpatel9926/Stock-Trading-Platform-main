
import React from 'react';

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import Hero from "../landing_page/home/Hero";


//Test Suite

describe( "Hero Componenet" , () => {

    test( "Renders Hero Image", () => {

        render( <Hero /> );

        const heroImage = screen.getByAltText( "Hero Image" );

        expect( heroImage ).toBeInTheDocument();
        
        expect( heroImage ).toHaveAttribute( "src", "media1/homeHero.png" );

    } );

    test( "renders Signup button" , () => {

        render( <Hero /> );

        const signUpButton = screen.getByRole('button', {name: "Signup Now"});

        expect( signUpButton ).toBeInTheDocument();

        expect( signUpButton ).toHaveClass("btn-primary")

})

} )
