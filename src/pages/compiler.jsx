import React, { useState, useRef, useEffect } from 'react';
// In a real app, you'd install and import lucide-react
// import { Play, Send, Clock, CheckCircle, XCircle, Code, BookOpen, Users, MessageSquare, Star, ThumbsUp } from 'lucide-react';

// --- Mock Lucide Icons ---
// Using simple SVG placeholders for this standalone demo.
const Play = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/></svg>;
const Send = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 9.87a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/></svg>;
const Clock = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/></svg>;
const CheckCircle = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/></svg>;
const XCircle = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>;
const Code = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z"/></svg>;
const BookOpen = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8.5 4.5A.5.5 0 0 1 9 5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5z"/><path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.433-3.283.893V2.828zm7 0c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.433-3.283.893V2.828z"/></svg>;
const Users = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-8-4a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm1.5.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zM5.5 9.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-1.5.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z"/></svg>;
const MessageSquare = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/></svg>;
const Star = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.699-4.023-2.968-2.843 4.051-.572L8 2.016l1.806 3.654 4.051.572-2.968 2.843.699 4.023-3.686-1.894a.503.503 0 0 0-.461 0z"/></svg>;
const ThumbsUp = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8.864 15.536c-.235.408-.62.65-.964.65s-.73-.242-.964-.65l-1.396-2.42c-.23-.399-.107-.901.272-1.11L5.2 10.428V8.71c0-.45.317-.83.729-.938l.412-.11L6.7 6.4c.05-.09.1-.16.16-.21.06-.05.13-.08.21-.1.08-.02.16-.03.25-.03.2 0 .39.08.53.2.14.12.21.28.21.45v2.79c0 .05.01.1.02.15.02.05.03.1.05.14l.05.12.04.1.02.06c.01.03.01.06.01.09s0 .06-.01.09l-.02.06-.04.1-.05.12c-.02.04-.03.09-.05.14-.01.05-.02.1-.02.15v3.13c0 .08-.02.15-.05.21-.03.06-.07.11-.12.15-.05.04-.1.07-.16.09s-.12.03-.18.03h-.01c-.06 0-.12-.01-.17-.03s-.11-.04-.16-.07c-.05-.03-.09-.06-.12-.1s-.05-.09-.07-.14l-.06-.16c-.01-.04-.01-.08-.01-.12V12c0-.18.08-.34.21-.45.13-.11.29-.17.47-.17h.45c.19 0 .37.07.5.2l.64 1.11c.07.12.1.25.1.39v.85c0 .06-.01.11-.02.16-.01.05-.03.1-.05.14l-.05.12-.04.1-.02.06c-.01.03-.01.06-.01.09s0 .06.01.09l.02.06.04.1.05.12c.02.04.03.09.05.14.01.05.02.1.02.15v.23c0 .08.02.15.05.21.03.06.07.11.12.15.05.04.1.07.16.09.06.02.12.03.18.03h.01c.06 0 .12-.01.17-.03.05-.02.11-.04.16-.07.05-.03.09-.06.12-.1.03-.04.05-.09.07-.14l.06-.16c.01-.04.01-.08.01-.12v-.94c0-.19-.08-.36-.22-.49-.14-.13-.32-.2-.5-.2h-.45c-.19 0-.37-.07-.5-.2l-.64-1.11c-.07-.12-.1-.25-.1-.39v-.85c0-.06.01-.11.02-.16.01-.05.03-.1.05-.14l.05-.12.04-.1.02-.06c.01-.03.01-.06.01-.09s0-.06-.01-.09l-.02-.06-.04-.1-.05-.12c-.02-.04-.03-.09-.05-.14-.01-.05-.02-.1-.02-.15V9.4c0-.19.08-.36.22-.49.14-.13.32-.2.5-.2h.45c.19 0 .37.07.5.2l.64 1.11c.07.12.1.25.1.39v.85c0 .06-.01.11-.02.16-.01.05-.03.1-.05.14l-.05.12-.04.1-.02.06c-.01.03-.01.06-.01.09s0 .06.01.09l.02.06.04.1.05.12c.02.04.03.09.05.14.01.05.02.1.02.15v.23c0 .08.02.15.05.21.03.06.07.11.12.15.05.04.1.07.16.09.06.02.12.03.18.03h.01c.06 0 .12-.01.17-.03.05-.02.11-.04.16-.07.05-.03.09-.06.12-.1.03-.04.05-.09.07-.14l.06-.16c.01-.04.01-.08.01-.12v-.94c0-.19-.08-.36-.22-.49-.14-.13-.32-.2-.5-.2h-.45c-.19 0-.37-.07-.5-.2l-.64-1.11c-.07-.12-.1-.25-.1-.39v-.85c0-.06.01-.11.02-.16.01-.05.03-.1.05-.14l.05-.12.04-.1.02-.06c.01-.03.01-.06.01-.09s0-.06-.01-.09l-.02-.06-.04-.1-.05-.12c-.02-.04-.03-.09-.05-.14-.01-.05-.02-.1-.02-.15V9.4c0-.19.08-.36.22-.49.14-.13.32-.2.5-.2h.45c.19 0 .37.07.5.2l.64 1.11c.07.12.1.25.1.39v.85c0 .06-.01.11-.02.16-.01.05-.03.1-.05.14l-.05.12-.04.1-.02.06c-.01.03-.01.06-.01.09s0 .06.01.09l.02.06.04.1.05.12c.02.04.03.09.05.14.01.05.02.1.02.15v.23c0 .08.02.15.05.21.03.06.07.11.12.15.05.04.1.07.16.09.06.02.12.03.18.03h.01c.06 0 .12-.01.17-.03.05-.02.11-.04.16-.07.05-.03.09-.06.12-.1.03-.04.05-.09.07-.14l.06-.16c.01-.04.01-.08.01-.12v-.94c0-.19-.08-.36-.22-.49-.14-.13-.32-.2-.5-.2h-.45c-.19 0-.37-.07-.5-.2l-.64-1.11c-.07-.12-.1-.25-.1-.39v-.85c0-.06.01-.11.02-.16.01-.05.03-.1.05-.14l.05-.12.04-.1.02-.06c.01-.03.01-.06.01-.09s0-.06-.01-.09l-.02-.06-.04-.1-.05-.12c-.02-.04-.03-.09-.05-.14-.01-.05-.02-.1-.02-.15V9.4c0-.19.08-.36.22-.49.14-.13.32-.2.5-.2h.45c.19 0 .37.07.5.2l.64 1.11c.07.12.1.25.1.39v.85c0 .06-.01.11-.02.16-.01.05-.03.1-.05.14l-.05.12-.04.1-.02.06c-.01.03-.01.06-.01.09s0 .06.01.09l.02.06.04.1.05.12c.02.04.03.09.05.14.01.05.02.1.02.15v.23c0 .08.02.15.05.21.03.06.07.11.12.15.05.04.1.07.16.09.06.02.12.03.18.03h.01c.06 0 .12-.01.17-.03.05-.02.11-.04.16-.07.05-.03.09-.06.12-.1.03-.04.05-.09.07-.14l.06-.16c.01-.04.01-.08.01-.12v-.94c0-.19-.08-.36-.22-.49-.14-.13-.32-.2-.5-.2h-.45c-.19 0-.37-.07-.5-.2l-.64-1.11c-.07-.12-.1-.25-.1-.39V9.4c0-.19.08-.36.22-.49.14-.13.32-.2.5-.2h.45c.19 0 .37.07.5.2l.64 1.11c.07.12.1.25.1.39v.85c0 .06-.01.11-.02.16-.01.05-.03.1-.05.14l-.05.12-.04.1-.02.06c-.01.03-.01.06-.01.09s0 .06.01.09l.02.06.04.1.05.12c.02.04.03.09.05.14.01.05.02.1.02.15v.23c0 .08.02.15.05.21.03.06.07.11.12.15.05.04.1.07.16.09.06.02.12.03.18.03h.01c.06 0 .12-.01.17-.03.05-.02.11-.04.16-.07.05-.03.09-.06.12-.1.03-.04.05-.09.07-.14l.06-.16c.01-.04.01-.08.01-.12v-.94c0-.19-.08-.36-.22-.49-.14-.13-.32-.2-.5-.2h-.45c-.19 0-.37-.07-.5-.2l-.64-1.11c-.07-.12-.1-.25-.1-.39V9.4c0-.19.08-.36.22-.49.14-.13.32-.2.5-.2h.45c.19 0 .37.07.5.2l.64 1.11c.07.12.1.25.1.39v.85c0 .06-.01.11-.02.16-.01.05-.03.1-.05.14l-.05.12-.04.1-.02.06c-.01.03-.01.06-.01.09s0 .06.01.09l.02.06.04.1.05.12c.02.04.03.09.05.14.01.05.02.1.02.15v.23c0 .08.02.15.05.21.03.06.07.11.12.15.05.04.1.07.16.09.06.02.12.03.18.03h.01c.06 0 .12-.01.17-.03.05-.02.11-.04.16-.07.05-.03.09-.06.12-.1.03-.04.05-.09.07-.14l.06-.16c.01-.04.01-.08.01-.12v-.94c0-.19-.08-.36-.22-.49-.14-.13-.32-.2-.5-.2h-.45c-.19 0-.37-.07-.5-.2l-.64-1.11c-.07-.12-.1-.25-.1-.39v-.85c0-.06.01-.11.02-.16.01-.05.03-.1.05-.14l.05-.12.04-.1.02-.06c.01-.03.01-.06.01-.09s0-.06-.01-.09l-.02-.06-.04-.1-.05-.12c-.02-.04-.03-.09-.05-.14-.01-.05-.02-.1-.02-.15V9.4c0-.19.08-.36.22-.49.14-.13.32-.2.5-.2h.45c.19 0 .37.07.5.2l.64 1.11c.07.12.1.25.1.39v.85c0 .06-.01.11-.02.16-.01.05-.03.1-.05.14l-.05.12-.04.1-.02.06c-.01.03-.01.06-.01.09s0 .06.01.09l.02.06.04.1.05.12c.02.04.03.09.05.14.01.05.02.1.02.15v.23c0 .08.02.15.05.21.03.06.07.11.12.15.05.04.1.07.16.09.06.02.12.03.18.03h.01c.06 0 .12-.01.17-.03.05-.02.11-.04.16-.07.05-.03.09-.06.12-.1.03-.04.05-.09.07-.14l.06-.16c.01-.04.01-.08.01-.12v-.94c0-.19-.08-.36-.22-.49-.14-.13-.32-.2-.5-.2h-.45c-.19 0-.37-.07-.5-.2l-.64-1.11c-.07-.12-.1-.25-.1-.39V9.4c0-.19.08-.36.22-.49.14-.13.32-.2.5-.2h.45c.19 0 .37.07.5.2l.64 1.11c.07.12.1.25.1.39v.85c0 .06-.01.11-.02.16l-.05.14-.05.12-.04.1-.02.06c-.01.03-.01.06-.01.09s0 .06.01.09l.02.06.04.1.05.12.05.14.02.15v.23c0 .08.02.15.05.21.03.06.07.11.12.15.05.04.1.07.16.09.06.02.12.03.18.03h.01c.06 0 .12-.01.17-.03.05-.02.11-.04.16-.07.05-.03.09-.06.12-.1.03-.04.05-.09.07-.14l.06-.16c.01-.04.01-.08.01-.12v-.94c0-.19-.08-.36-.22-.49-.14-.13-.32-.2-.5-.2h-.45c-.19 0-.37-.07-.5-.2l-.64-1.11c-.07-.12-.1-.25-.1-.39V9.4c0-.19.08-.36.22-.49.14-.13.32-.2.5-.2h.45c.19 0 .37.07.5.2l.64 1.11c.07.12.1.25.1.39v.85c0 .06-.01.11-.02.16l-.05.14-.05.12-.04.1-.02.06c-.01.03-.01.06-.01.09s0 .06.01.09l.02.06.04.1.05.12.05.14.02.15v.23c0 .08.02.15.05.21.03.06.07.11.12.15.05.04.1.07.16.09.06.02.12.03.18.03h.01c.06 0 .12-.01.17-.03.05-.02.11-.04.16-.07.05-.03.09-.06.12-.1.03-.04.05-.09.07-.14l.06-.16c.01-.04.01-.08.01-.12v-.94c0-.19-.08-.36-.22-.49-.14-.13-.32-.2-.5-.2h-.45c-.19 0-.37-.07-.5-.2l-.64-1.11c-.07-.12-.1-.25-.1-.39V9.4c0-.19.08-.36.22-.49.14-.13.32-.2.5-.2h.45c.19 0 .37.07.5.2l.64 1.11c.07.12.1.25.1.39v.85c0 .06-.01.11-.02.16l-.05.14-.05.12-.04.1-.02.06c-.01.03-.01.06-.01.09s0 .06.01.09l.02.06.04.1.05.12.05.14.02.15v.23c0 .08.02.15.05.21.03.06.07.11.12.15.05.04.1.07.16.09.06.02.12.03.18.03h.01c.06 0 .12-.01.17-.03.05-.02.11-.04.16-.07.05-.03.09-.06.12-.1.03-.04.05-.09.07-.14l.06-.16c.01-.04.01-.08.01-.12v-.94c0-.19-.08-.36-.22-.49-.14-.13-.32-.2-.5-.2h-.45c-.19 0-.37-.07-.5-.2l-.64-1.11c-.07-.12-.1-.25-.1-.39V9.4c0-.19.08-.36.22-.49.14-.13.32-.2.5-.2h.45c.19 0 .37.07.5.2l.64 1.11c.07.12.1.25.1.39v.85c0 .06-.01.11-.02.16l-.05.14-.05.12-.04.1-.02.06c-.01.03-.01.06-.01.09s0 .06.01.09l.02.06.04.1.05.12.05.14.02.15v.23c0 .08.02.15.05.21.03.06.07.11.12.15.05.04.1.07.16.09.06.02.12.03.18.03h.01c.06 0 .12-.01.17-.03.05-.02.11-.04.16-.07.05-.03.09-.06.12-.1.03-.04.05-.09.07-.14l.06-.16c.01-.04.01-.08.01-.12v-.94c0-.19-.08-.36-.22-.49-.14-.13-.32-.2-.5-.2h-.45c-.19 0-.37-.07-.5-.2l-.64-1.11c-.07-.12-.1-.25-.1-.39V9.4c0-.19.08-.36.22-.49.14-.13.32-.2.5-.2h.45c.19 0 .37.07.5.2l.64 1.11c.07.12.1.25.1.39v.85c0 .06-.01.11-.02.16l-.05.14-.05.12-.04.1-.02.06c-.01.03-.01.06-.01.09s0 .06.01.09l.02.06.04.1.05.12.05.14.02.15v.23c0 .08.02.15.05.21.03.06.07.11.12.15.05.04.1.07.16.09.06.02.12.03.18.03h.01c.06 0 .12-.01.17-.03.05-.02.11-.04.16-.07.05-.03.09-.06.12-.1.03-.04.05-.09.07-.14l.06-.16c.01-.04.01-.08.01-.12v-.94c0-.19-.08-.36-.22-.49-.14-.13-.32-.2-.5-.2h-.45c-.19 0-.37-.07-.5-.2l-.64-1.11c-.07-.12-.1-.25-.1-.39v-.85c0-.06.01-.11.02-.16l.05-.14.05-.12.04-.1.02-.06c.01-.03.01-.06.01-.09s0 .06-.01-.09l-.02-.06-.04-.1-.05-.12-.05-.14-.02-.15V9.4c0-.19.08-.36.22-.49.14-.13.32-.2.5-.2h.45c.19 0 .37.07.5.2l.64 1.11c.07.12.1.25.1.39v.85c0 .06-.01.11-.02.16l-.05.14-.05.12-.04.1-.02.06c-.01.03-.01.06-.01.09s0 .06.01.09l.02.06.04.1.05.12.05.14.02.15v.23c0 .08.02.15.05.21.03.06.07.11.12.15.05.04.1.07.16.09.06.02.12.03.18.03h.01c.06 0 .12-.01.17-.03.05-.02.11-.04.16-.07.05-.03.09-.06.12-.1.03-.04.05-.09.07-.14l.06-.16c.01-.04.01-.08.01-.12v-.94c0-.19-.08-.36-.22-.49-.14-.13-.32-.2-.5-.2h-.45c-.19 0-.37-.07-.5-.2l-.64-1.11c-.07-.12-.1-.25-.1-.39V9.4c0-.19.08-.36.22-.49.14-.13.32-.2.5-.2h.45c.19 0 .37.07.5.2l.64 1.11c.07.12.1.25.1.39v.85c0 .06-.01.11-.02.16l-.05.14-.05.12-.04.1-.02.06c-.01.03-.01.06-.01.09s0 .06.01.09l.02.06.04.1.05.12.05.14.02.15v.23c0 .08.02.15.05.21.03.06.07.11.12.15.05.04.1.07.16.09.06.02.12.03.18.03h.01c.06 0 .12-.01.17-.03s-.11-.04-.16-.07c-.05-.03-.09-.06-.12-.1s-.05-.09-.07-.14l-.06-.16c-.01-.04-.01-.08-.01-.12v-.94c0-.19-.08-.36-.22-.49-.14-.13-.32-.2-.5-.2h-.45c-.19 0-.37-.07-.5-.2l-.64-111c-.07-.12-.1-.25-.1-.39v-.85c0-.06.01-.11.02-.16l.05-.14.05-.12.04-.1.02-.06c.01-.03.01-.06.01-.09s0 .06-.01-.09l-.02-.06-.04-.1-.05-.12-.05-.14-.02-.15V9.4c0-.19.08-.36.22-.49.14-.13.32-.2.5-.2h.45c.19 0 .37.07.5.2l.64 1.11c.07.12.1.25.1.39v.85c0 .06-.01.11-.02.16l-.05.14-.05.12-.04.1-.02.06c-.01.03-.01.06-.01.09s0 .06.01.09l.02.06.04.1.05.12.05.14.02.15v.23c0 .08.02.15.05.21.03.06.07.11.12.15.05.04.1.07.16.09.06.02.12.03.18.03h.01c.06 0 .12-.01.17-.03.05-.02.11-.04.16-.07.05-.03.09-.06.12-.1.03-.04.05-.09.07-.14l.06-.16c.01-.04.01-.08.01-.12v-.94c0-.19-.08-.36-.22-.49-.14-.13-.32-.2-.5-.2h-.45c-.19 0-.37-.07-.5-.2l-.64-1.11c-.07-.12-.1-.25-.1-.39V9.4c0-.19.08-.36.22-.49.14-.13.32-.2.5-.2h.45c.19 0 .37.07.5.2l.64 1.11c.07.12.1.25.1.39v.85c0 .06-.01.11-.02.16l-.05.14-.05.12-.04.1-.02.06c-.01.03-.01.06-.01-.09s0 .06.01.09l.02.06.04.1.05.12.05.14.02.15v.23c0 .08.02.15.05.21.03.06.07.11.12.15.05.04.1.07.16.09.06.02.12.03.18.03h.01c.06 0 .12-.01.17-.03.05-.02.11-.04.16-.07.05-.03.09-.06.12-.1.03-.04.05-.09.07-.14l.06-.16c.01-.04.01-.08.01-.12v-.94c0-.19-.08-.36-.22-.49-.14-.13-.32-.2-.5-.2h-.45c-.19 0-.37-.07-.5-.2l-.64-1.11a.498.498 0 0 1-.5-.85c.07-.12.1-.25.1-.39V9.4c0-.19.08-.36.22-.49.14-.13.32-.2.5-.2h.45c.19 0 .37.07.5.2l.64 1.11c.07.12.1.25.1.39v.85c0 .06-.01.11-.02.16l-.05.14-.05.12-.04.1-.02.06c-.01.03-.01.06-.01.09s0 .06.01.09l.02.06.04.1.05.12.05.14.02.15v.23c0 .08.02.15.05.21.03.06.07.11.12.15.05.04.1.07.16.09.06.02.12.03.18.03h.01c.06 0 .12-.01.17-.03.05-.02.11-.04.16-.07.05-.03.09-.06.12-.1.03-.04.05-.09.07-.14l.06-.16c.01-.04.01-.08.01-.12v-.94c0-.19-.08-.36-.22-.49-.14-.13-.32-.2-.5-.2h-.45c-.19 0-.37-.07-.5-.2l-.64-1.11c-.07-.12-.1-.25-.1-.39V9.4c0-.19.08-.36.22-.49.14-.13.32-.2.5-.2h.45c.19 0 .37.07.5.2l.64 1.11c.07.12.1.25.1.39v.85c0 .06-.01.11-.02.16l-.05.14-.05.12-.04.1-.02.06c-.01.03-.01.06-.01.09s0 .06.01.09l.02.06.04.1.05.12.05.14.02.15v.23c0 .08.02.15.05.21.03.06.07.11.12.15.05.04.1.07.16.09.06.02.12.03.18.03h.01c.06 0 .12-.01.17-.03.05-.02.11-.04.16-.07.05-.03.09-.06.12-.1.03-.04.05-.09.07-.14l.06-.16c.01-.04.01-.08.01-.12v-.94c0-.19-.08-.36-.22-.49-.14-.13-.32-.2-.5-.2h-.45c-.19 0-.37-.07-.5-.2l-.64-1.11c-.07-.12-.1-.25-.1-.39V9.4c0-.19.08-.36.22-.49.14-.13.32-.2.5-.2h.45c.19 0 .37.07.5.2l.64 1.11c.07.12.1.25.1.39v.85c0 .06-.01.11-.02.16l-.05.14-.05.12-.04.1-.02.06c-.01.03-.01.06-.01.09s0 .06.01.09l.02.06.04.1.05.12.05.14.02.15v.23c0 .08.02.15.05.21.03.06.07.11.12.15.05.04.1.07.16.09.06.02.12.03.18.03h.01c.06 0 .12-.01.17-.03.05-.02.11-.04.16-.07.05-.03.09-.06.12-.1.03-.04.05-.09.07-.14l.06-.16c.01-.04.01-.08.01-.12v-.94c0-.19-.08-.36-.22-.49-.14-.13-.32-.2-.5-.2h-.45c-.19 0-.37-.07-.5-.2l-.64-1.11c-.07-.12-.1-.25-.1-.39V9.4c0-.19.08-.36.22-.49.14-.13.32-.2.5-.2h.45c.19 0 .37.07.5.2l.64 1.11c.07.12.1.25.1.39v.85c0 .06-.01.11-.02.16l-.05.14-.05.12-.04.1-.02.06c-.01.03-.01.06-.01.09s0 .06.01.09l.02.06.04.1.05.12.05.14.02.15v.23c0 .08.02.15.05.21.03.06.07.11.12.15.05.04.1.07.16.09.06.02.12.03.18.03h.01c.06 0 .12-.01.17-.03.05-.02.11-.04.16-.07.05-.03.09-.06.12-.1.03-.04.05-.09.07-.14l.06-.16c.01-.04.01-.08.01-.12v-.94c0-.19-.08-.36-.22-.49-.14-.13-.32-.2-.5-.2h-.45c-.19 0-.37-.07-.5-.2l-.64-1.11c-.07-.12-.1-.25-.1-.39V9.4c0-.19.08-.36.22-.49.14-.13.32-.2.5-.2h.45c.19 0 .37.07.5.2l.64 1.11c.07.12.1.25.1.39v.85c0 .06-.01.11-.02.16l-.05.14-.05.12-.04.1-.02.06c-.01.03-.01.06-.01.09s0 .06.01.09l.02.06.04.1.05.12.05.14.02.15v.23c0 .08.02.15.05.21.03.06.07.11.12.15.05.04.1.07.16.09.06.02.12.03.18.03h.01zM4.952 8.71c0 .45.317.83.729.938l.412.11L6.45 11c.05.09.1.16.16.21.06.05.13.08.21.1.08.02.16.03.25.03.2 0 .39-.08.53-.2.14-.12.21-.28.21-.45V8.71c0-.05.01-.1.02-.15.02-.05.03-.1.05-.14l.05-.12.04-.1.02-.06c.01-.03.01-.06.01-.09s0-.06-.01-.09l-.02-.06-.04-.1-.05-.12c-.02-.04-.03-.09-.05-.14-.01-.05-.02-.1-.02-.15V5.67c0-.19-.08-.36-.22-.49-.14-.13-.32-.2-.5-.2h-.45c-.19 0-.37.07-.5.2l-.64 1.11c-.07.12-.1.25-.1-.39v.85c0 .06.01.11.02.16.01.05.03.1.05.14l.05.12.04.1.02.06c.01.03.01.06.01.09s0 .06-.01.09l-.02.06-.04.1-.05.12c-.02.04-.03.09-.05.14-.01.05-.02.1-.02.15v.42c0 .19-.08.36-.22-.49-.14.13-.32.2-.5.2h-.45c-.19 0-.37-.07-.5-.2l-.64-1.11c-.07-.12-.1-.25-.1-.39V6.76c0-.06.01-.11.02-.16.01-.05.03-.1.05-.14l.05-.12.04-.1.02-.06c.01-.03.01-.06.01-.09s0-.06-.01-.09l-.02-.06-.04-.1-.05-.12c-.02-.04-.03-.09-.05-.14-.01-.05-.02-.1-.02-.15V5.67c0-.19.08-.36.22-.49.14-.13.32-.2.5-.2h.45c.19 0 .37.07.5.2l.64 1.11c.07.12.1.25.1.39v.85c0 .06-.01.11-.02.16-.01.05-.03.1-.05.14l-.05.12-.04.1-.02.06c-.01.03-.01.06-.01.09s0 .06.01.09l.02.06.04.1.05.12c.02.04.03.09.05.14.01.05.02.1.02.15v.42c0 .19-.08.36-.22-.49-.14.13-.32.2-.5.2h-.45c-.19 0-.37-.07-.5-.2l-.64-1.f11c-.07-.12-.1-.25-.1-.39v-.85c0-.06.01-.11.02-.16.01-.05.03-.1.05-.14l.05-.12.04-.1.02-.06c.01-.03.01-.06.01-.09s0-.06-.01-.09l-.02-.06-.04-.1-.05-.12c-.02-.04-.03-.09-.05-.14-.01-.05-.02-.1-.02-.15V5.67c0-.19.08-.36.22-.49.14-.13-.32-.2-.5-.2h-.45c-.19 0-.37.07-.5-.2l-.64 1.11c-.07.12-.1-.25-.1-.39v.85c0 .06.01.11.02.16.01.05.03.1.05.14l.05.12.04.1.02.06c.01.03.01.06.01.09s0 .06-.01.09l-.02.06-.04.1-.05.12c-.02.04-.03.09-.05.14-.01.05-.02.1-.02.15v.42c0 .19-.08.36-.22-.49-.14.13-.32.2-.5.2h-.45c-.19 0-.37-.07-.5-.2l-.64-1.11c-.07-.12-.1-.25-.1-.39v-.85c0-.06.01-.11.02-.16.01-.05.03-.1.05-.14l.05-.12.04-.1.02-.06c.01-.03.01-.06.01-.09s0-.06-.01-.09l-.02-.06-.04-.1-.05-.12c-.02-.04-.03-.09-.05-.14-.01-.05-.02-.1-.02-.15V5.67c0-.19.08-.36.22-.49.14-.13-.32-.2-.5-.2h-.45c-.19 0-.37.07-.5-.2l-.64 1.11c-.07.12-.1-.25-.1-.39v.85c0 .06.01.11.02.16.01.05.03.1.05.14l.05.12.04.1.02.06c.01.03.01.06.01.09s0 .06-.01.09l-.02.06-.04.1-.05.12c-.02.04-.03.09-.05.14-.01.05-.02.1-.02.15v.42z"/></svg>;
// --- End Mock Icons ---

const CodeArena = () => {
  const [activeTab, setActiveTab] = useState('description');
  const [language, setLanguage] = useState('python');
  const [code, setCode] = useState(`# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def modifiedList(self, nums, head):
        # Write your solution here
        pass`);
  const [testResults, setTestResults] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [showTestCase, setShowTestCase] = useState(true);
  const [submitStatus, setSubmitStatus] = useState(null);
  const textareaRef = useRef(null);

  const [comments, setComments] = useState([
    { id: 1, user: 'Coder123', time: '2 days ago', text: 'This problem is tricky with the edge cases!' },
    { id: 2, user: 'SDE_II_Java', time: '1 day ago', text: 'Using a Set and a dummy head makes this much easier. O(n+m) solution.' },
  ]);
  const [newComment, setNewComment] = useState('');

  const languages = {
    python: { name: 'Python3', template: '# Write your Python code here\nclass Solution:\n    def modifiedList(self, nums, head):\n        pass' },
    javascript: { name: 'JavaScript', template: '// Write your JavaScript code here\n/**\n * @param {number[]} nums\n * @param {ListNode} head\n * @return {ListNode}\n */\nvar modifiedList = function(nums, head) {\n    \n};\n' },
    java: { name: 'Java', template: '// Write your Java code here\n/**\n * Definition for singly-linked list.\n * public class ListNode {\n * int val;\n * ListNode next;\n * ListNode() {}\n * ListNode(int val) { this.val = val; }\n * ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n    public ListNode modifiedList(int[] nums, ListNode head) {\n        \n    }\n}\n' },
    cpp: { name: 'C++', template: '// Write your C++ code here\n/**\n * Definition for singly-linked list.\n * struct ListNode {\n * int val;\n * ListNode *next;\n * ListNode() : val(0), next(nullptr) {}\n * ListNode(int val) : val(val), next(nullptr) {}\n * ListNode(int val, ListNode *next) : val(val), next(next) {}\n * };\n */\nclass Solution {\npublic:\n    ListNode* modifiedList(vector<int>& nums, ListNode* head) {\n        \n    }\n};\n' },
    c: { name: 'C', template: '// Write your C code here\n/**\n * Definition for singly-linked list.\n * struct ListNode {\n * int val;\n * struct ListNode *next;\n * };\n */\nstruct ListNode* modifiedList(int* nums, int numsSize, struct ListNode* head){\n    \n}\n' }
  };

  const testCases = [
    { input: 'nums = [1,2,3], head = [1,2,3,4,5]', expected: '[4,5]', status: null },
    { input: 'nums = [1], head = [1,2,1,2,1,2]', expected: '[2,2,2]', status: null },
    { input: 'nums = [5], head = [1,2,3,4]', expected: '[1,2,3,4]', status: null }
  ];

  const handleRun = () => {
    setIsRunning(true);
    setShowTestCase(true);
    setSubmitStatus(null);
    
    setTimeout(() => {
      const results = testCases.map((test, idx) => ({
        ...test,
        status: Math.random() > 0.3 ? 'passed' : 'failed',
        runtime: `${Math.floor(Math.random() * 50 + 10)}ms`,
        memory: `${(Math.random() * 5 + 10).toFixed(1)}MB`
      }));
      setTestResults(results);
      setIsRunning(false);
    }, 1500);
  };

  const handleSubmit = () => {
    setIsRunning(true);
    setTestResults(null);
    setTimeout(() => {
      setSubmitStatus('Code submitted successfully! ✓');
      setIsRunning(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1000);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim() === '') return;
    const newCommentObj = {
      id: comments.length + 1,
      user: 'CurrentUser',
      time: 'Just now',
      text: newComment
    };
    setComments([newCommentObj, ...comments]);
    setNewComment('');
  };

  const TabButton = ({ tabName, icon, label }) => (
    <button
      onClick={() => setActiveTab(tabName)}
      className={`flex items-center gap-2 px-4 py-3 font-medium transition-all duration-150 rounded-t-lg ${
        activeTab === tabName
          ? 'text-blue-400 border-b-2 border-blue-400 bg-gray-850'
          : 'text-gray-400 hover:text-gray-200 hover:bg-gray-750'
      }`}
    >
      {React.createElement(icon, { className: "w-4 h-4" })}
      {label}
    </button>
  );

  return (
    <div className="h-screen bg-gradient-to-br from-black to-gray-900 text-gray-100 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-black border-b border-gray-700 px-4 py-3 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Code className="w-6 h-6 text-blue-500" />
            <span className="text-xl font-bold">CodeArena</span>
          </div>
          <span className="text-gray-400 text-sm">Daily Question</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500">
            <Clock className="w-4 h-4 inline mr-2" />
            Timer
          </button>
          <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-lg transition-colors font-semibold text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400">
            Premium
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel */}
        <div className="w-1/2 border-r border-gray-700 flex flex-col">
          {/* Tabs */}
          <div className="bg-gray-800 border-b border-gray-700 flex flex-shrink-0 space-x-1 px-2 pt-2">
            <TabButton tabName="description" icon={BookOpen} label="Description" />
            <TabButton tabName="editorial" icon={Star} label="Editorial" />
            <TabButton tabName="solutions" icon={Users} label="Solutions" />
            <TabButton tabName="submissions" icon={Send} label="Submissions" />
            <TabButton tabName="comments" icon={MessageSquare} label="Comments" />
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-6 bg-gray-850">
            {activeTab === 'description' && (
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <h1 className="text-2xl font-bold text-white">3217. Delete Nodes From Linked List Present in Array</h1>
                    <span className="px-3 py-1 bg-yellow-900 text-yellow-300 rounded-full text-sm font-medium">
                      Medium
                    </span>
                  </div>
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">Topics</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">Companies</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">Hint</span>
                  </div>
                </div>

                <div className="text-gray-300 space-y-4">
                  <p>
                    You are given an array of integers <code className="bg-gray-700 px-2 py-1 rounded text-blue-300">nums</code> and the{' '}
                    <code className="bg-gray-700 px-2 py-1 rounded text-blue-300">head</code> of a linked list. Return the{' '}
                    <code className="bg-gray-700 px-2 py-1 rounded text-blue-300">head</code> of the modified linked list after{' '}
                    <strong>removing</strong> all nodes from the linked list that have a value that exists in{' '}
                    <code className="bg-gray-700 px-2 py-1 rounded text-blue-300">nums</code>.
                  </p>
                  
                  <div className="space-y-4 mt-6">
                     <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                       <div className="font-semibold mb-2 text-white">Example 1:</div>
                       <div className="space-y-2 text-sm">
                         <div>
                           <strong>Input:</strong>{' '}
                           <code className="text-blue-400">nums = [1,2,3], head = [1,2,3,4,5]</code>
                         </div>
                         <div>
                           <strong>Output:</strong> <code className="text-green-400">[4,5]</code>
                         </div>
                         <div className="text-gray-400">
                           <strong>Explanation:</strong> Remove nodes with values 1, 2, and 3.
                         </div>
                       </div>
                     </div>
                     <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                       <div className="font-semibold mb-2 text-white">Example 2:</div>
                        <div className="space-y-2 text-sm">
                         <div>
                           <strong>Input:</strong>{' '}
                           <code className="text-blue-400">nums = [1], head = [1,2,1,2,1,2]</code>
                         </div>
                         <div>
                           <strong>Output:</strong> <code className="text-green-400">[2,2,2]</code>
                         </div>
                       </div>
                     </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'editorial' && (
              <div className="space-y-4">
                 <h2 className="text-2xl font-bold text-white">Editorial Solution</h2>
                 <p className="text-gray-300">The editorial for this problem is not available yet.</p>
              </div>
            )}

            {activeTab === 'solutions' && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white mb-4">Community Solutions</h2>
                <p className="text-gray-300">Be the first to share your solution!</p>
              </div>
            )}

            {activeTab === 'submissions' && (
               <div className="space-y-4">
                 <h2 className="text-2xl font-bold text-white mb-4">Your Submissions</h2>
                 <p className="text-gray-300">You have not made any submissions for this problem yet.</p>
               </div>
            )}

            {activeTab === 'comments' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-4">Comments ({comments.length})</h2>
                
                <form onSubmit={handleAddComment} className="space-y-3">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full h-24 p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    placeholder="Add your comment..."
                  />
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Post Comment
                    </button>
                  </div>
                </form>

                <div className="space-y-4">
                  {comments.map((comment) => (
                    <div key={comment.id} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center font-bold text-sm">
                            {comment.user.substring(0, 1)}
                          </div>
                          <span className="font-semibold text-white">{comment.user}</span>
                        </div>
                        <span className="text-sm text-gray-400">{comment.time}</span>
                      </div>
                      <p className="text-gray-300 text-sm">{comment.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Panel - Code Editor */}
        <div className="w-1/2 flex flex-col bg-gray-900">
          {/* Language Selector and Actions */}
          <div className="bg-gray-800 border-b border-gray-700 px-4 py-3 flex items-center justify-between flex-shrink-0">
            <select
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value);
                setCode(languages[e.target.value].template);
                setTestResults(null);
              }}
              className="bg-gray-700 text-gray-100 px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium"
            >
              {Object.entries(languages).map(([key, lang]) => (
                <option key={key} value={key}>
                  {lang.name}
                </option>
              ))}
            </select>

            {submitStatus && (
              <span className="text-green-400 text-sm font-medium">{submitStatus}</span>
            )}

            <div className="flex gap-2">
              <button
                onClick={handleRun}
                disabled={isRunning}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <Play className="w-4 h-4" />
                Run
              </button>
              <button
                onClick={handleSubmit}
                disabled={isRunning}
                className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors flex items-center gap-2 font-semibold disabled:opacity-50 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <Send className="w-4 h-4" />
                Submit
              </button>
            </div>
          </div>

          {/* Code Editor */}
          <div className="flex-1 overflow-hidden relative">
            <textarea
              ref={textareaRef}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-full bg-gray-900 text-gray-100 p-4 font-mono text-sm resize-none focus:outline-none outline-none caret-blue-500"
              style={{ tabSize: 4 }}
              spellCheck={false}
            />
          </div>

          {/* Test Cases / Results */}
          {showTestCase && (
            <div className="border-t border-gray-700 bg-gray-850 max-h-64 overflow-y-auto flex-shrink-0">
              <div className="px-4 py-3 border-b border-gray-700 flex items-center justify-between">
                <div className="flex gap-4">
                  <button className="text-blue-400 font-semibold border-b-2 border-blue-400 pb-1 text-sm">
                    Testcase
                  </button>
                </div>
                <button
                  onClick={() => setShowTestCase(false)}
                  className="text-gray-400 hover:text-gray-200"
                >
                  ✕
                </button>
              </div>

              {isRunning ? (
                <div className="p-8 flex items-center justify-center">
                  <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
                </div>
              ) : testResults ? (
                <div className="p-4 space-y-3">
                  {testResults.map((result, idx) => (
                    <div key={idx} className="bg-gray-800 p-3 rounded-lg border border-gray-700">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {result.status === 'passed' ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-500" />
                          )}
                          <span className="font-semibold text-sm text-white">Test Case {idx + 1}</span>
                        </div>
                        <span className="text-sm text-gray-400">
                          {result.runtime} • {result.memory}
                        </span>
                      </div>
                      <div className="text-sm space-y-1 font-mono">
                        <div className="text-gray-400">Input: {result.input}</div>
                        <div className="text-gray-400">Expected: {result.expected}</div>
                        {result.status === 'passed' ? (
                          <div className="text-green-400">✓ Output matches expected</div>
                        ) : (
                          <div className="text-red-400">✗ Output does not match</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 space-y-2">
                  {testCases.map((test, idx) => (
                    <div key={idx} className="bg-gray-800 p-3 rounded-lg border border-gray-700">
                      <div className="font-semibold mb-1 text-sm text-white">Test Case {idx + 1}</div>
                      <div className="text-sm text-gray-400 font-mono">{test.input}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeArena;