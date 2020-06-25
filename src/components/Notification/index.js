import React, { useState, useEffect, useMemo } from 'react';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale/pt';

import api from '../../services/api';
import { Container, Badge, NotificationList, Notification, Scroll } from './styles';

export default function Notifications() {
    const [visible, setVisible] = useState(false);
    const [notification, setNotification] = useState([]);

    const hasUnread = useMemo(
        () => Boolean(notification.find(notification => notification.read === false))
        [notification] //toda vez que a var notification do useState for altera ou chamada via API sera recalculado esta variave hasUnread
    );

    useEffect(() => {
        async function loadNotifications() {
            const response = await api.get('notifications');

            const data = response.data.map(notification => ({
                ...notification,
                timeDistance: formatDistance( //cria uma var com 3 elementos
                    parseISO(notification.createdAt),
                    new Date(),
                    { addSuffix: true, locale: pt }
                ),
            }));

            setNotification(data);
        }

        loadNotifications();
    }, []);

    function handleToggleVisible() {
        setVisible(!visible);
    }

    async function handleMarkAsRead(id) {
        await api.put(`notifications/${id}`);

        setNotification(
            notification.map(notification =>
                notification._id === id ? { ...notification, read: true } : notification
            )
        );
    }

    return (
        <Container>
            <Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
                <MdNotifications MdNotifications color="#7159c1" size={20} />
            </Badge>

            <NotificationList visible={visible}>
                <Scroll>
                    {notification.map(notification => (
                        <Notification key={notification._id} unread={!notification.read}>
                            <p>{notification.content}</p>
                            <time>{notification.timeDistance}</time>
                            {!notification.read && (
                                <button type="button" onClick={() => handleMarkAsRead(notification._id)}>Marcar como lida</button>
                            )}
                        </Notification>
                    ))}

                </Scroll>
            </NotificationList>
        </Container>
    );
}
