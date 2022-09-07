import React from 'react';

export const Footer = () => (
    <React.Fragment>
        <p className="text-lg">
            &copy; {new Date().getFullYear()}{' '}
            <a
                target="_blank"
                href="https://github.com/mioscape"
            >
                TikTok-DL Project
            </a>
        </p>
    </React.Fragment>
);
