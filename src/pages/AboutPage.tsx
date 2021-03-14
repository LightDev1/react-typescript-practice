import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC = () => {
    const history = useHistory();

    return (
        <>
            <h1>Страница информации</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptatibus. Quas hic veniam suscipit illum, vitae perferendis et aperiam nostrum exercitationem nesciunt voluptas fugit praesentium eligendi voluptate ullam corporis dolorum.</p>
            <button
                className="btn"
                onClick={() => history.push('/')}
            >
                К списку дел
            </button>
        </>
    );
};
