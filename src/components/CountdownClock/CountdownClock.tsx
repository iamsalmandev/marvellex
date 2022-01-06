
import React, { useEffect, useState } from 'react';

import {
    CountDown,
    CountDownCount,
    CountDownDays,
    CountDownUnit,
    CountDownWrapper,
    CourseSaleHeading,
} from './elements';

interface Props {
    header?: string;
    countdownTextColor?: string;
    futureDate: Date;
    offerUntil?: string;
    light?: boolean;
    leftAlign?: boolean;
    onFinish?(): void;
}

export const CountdownClock: React.FC<Props> = ({
    countdownTextColor,
    futureDate,
    header,
    light,
    onFinish, // recommended: pass onFinish with a stable identity using useCallback hook
    leftAlign,
}) => {
    const [timeUntil, setTimeUntil] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const beginCountdown = setInterval(() => {
            const currentTime = new Date();
            const timeDifference = (futureDate.getTime() - currentTime.getTime()) / 1000 / 60 / 60 / 24;
            if (timeDifference <= 0 && onFinish) {
                onFinish();
            }
            const days = Math.floor(timeDifference);
            const hours = Math.floor((timeDifference % 1) * 24);
            const minutes = Math.floor((((timeDifference % 1) * 24) % 1) * 60);
            const seconds = Math.floor((((((timeDifference % 1) * 24) % 1) * 60) % 1) * 60);
            setTimeUntil({ days, hours, minutes, seconds });
        }, 1000);
        return () => clearInterval(beginCountdown);
    }, [futureDate, onFinish]);

    return (
        <CountDownWrapper data-testid="countdown-clock">
            {header && (
                <>
                    <CourseSaleHeading customColor={countdownTextColor} leftAlign={leftAlign}>
                        {header}
                    </CourseSaleHeading>
                </>
            )}
            <CountDown leftAlign={leftAlign}>
                <CountDownDays leftAlign={leftAlign}>
                    <CountDownCount id="days">
                        days
                    </CountDownCount>
                    <CountDownUnit light={light}>{timeUntil.days}</CountDownUnit>
                </CountDownDays>
                <CountDownDays leftAlign={leftAlign}>
                    <CountDownCount id="hours">
                        hours
                    </CountDownCount>
                    <CountDownUnit light={light}>{timeUntil.hours}</CountDownUnit>
                </CountDownDays>
                <CountDownDays leftAlign={leftAlign}>
                    <CountDownCount id="minutes">
                        minutes
                    </CountDownCount>
                    <CountDownUnit light={light}>{timeUntil.minutes}</CountDownUnit>
                </CountDownDays>
                <CountDownDays leftAlign={leftAlign}>
                    <CountDownCount id="seconds">
                        seconds
                    </CountDownCount>
                    <CountDownUnit light={light}>{timeUntil.seconds}</CountDownUnit>
                </CountDownDays>
            </CountDown>
        </CountDownWrapper>
    );
};
