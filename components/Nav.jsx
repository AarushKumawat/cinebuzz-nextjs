"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { jwtDecode } from 'jwt-decode';

const Nav = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setIsAuthenticated(true);
                setUser(decoded);
            } catch (err) {
                localStorage.removeItem('token');
            }
        }
    }, []);

    const handleSignOut = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link href="/" className="flex gap-2 flex-center">
                <Image
                    src="/assets/images/logo.svg"
                    alt="NextApp logo"
                    width={30}
                    height={30}
                    className="object-contain"
                />
                <p className="logo_text w-full">Cinebuzz</p>
            </Link>

            <div className="sm:flex hidden items-center gap-4">
                <input
                    type="text"
                    placeholder="Search..."
                    className="black_btn flex-1"
                />

                {isAuthenticated ? (
                    <div className="flex gap-3 md:gap-5">
                        <button
                            type="button"
                            onClick={handleSignOut}
                            className="outline_btn"
                        >
                            Sign Out
                        </button>
                        <Link href="/profile">
                            <Image
                                src={user?.image || '/assets/images/default-profile.png'}
                                width={30}
                                height={30}
                                className="rounded-full"
                                alt="profile"
                            />
                        </Link>
                    </div>
                ) : (
                    <Link href="/sign-in">
                        <button
                            type="button"
                            className="black_btn"
                        >
                            Sign In
                        </button>
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Nav;
