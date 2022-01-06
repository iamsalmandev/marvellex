import React, { useEffect } from 'react';
import Tabs from '@material-ui/core/Tabs';
import MuiTab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { ashWhite, marvelGreen, smokeGrey } from '~/styles';
import styled, { css } from 'styled-components';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { ArrowForward } from '@material-ui/icons';

export const Tab = styled(MuiTab)`
  span{
      align-items: start;
      text-align: left;
  }
`;

const Circle = styled.span<{ filled?: boolean }>`
  background: ${ashWhite};
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
  width: 8px;
  height: 8px;
  ${({ filled }) =>
        filled &&
        css`
      background: ${marvelGreen};
    `};
`;


const createGetSectionProps = (name: string, activeSection: string) => () => ({
    style: { display: name === activeSection ? 'initial' : 'none' },
    key: name,
});

interface SectionProps {
    index: number,
    getSectionProps(): { style: { display: string }; key: string };
}
export interface Sections {
    name: string;
    displayName?: string;
    render?(getSectionProps: SectionProps): React.ReactNode;
}

interface TabsVerticalProps {
    activeSection: string;
    sections: Sections[];
    goBack?(): void | null;
    onClickTab: (name: string) => void;
    tabHeading?: string;
    containerStyles?: React.CSSProperties;
    sectionStyles?: React.CSSProperties;
}


const TabPanel: React.FC<{ children?: React.ReactNode | string, value: number, index: number }> = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


const a11yProps = (index: number) => {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


export const TabsVertical: React.FC<TabsVerticalProps> = ({ sections, activeSection, onClickTab }) => {
    const [value, setValue] = React.useState(0);
    console.log("activeSection", activeSection)
    const tabIndex = sections.findIndex(
        (section) => section.name === activeSection
    );

    useEffect(() => {
        setValue(tabIndex || 0);
    }, [tabIndex]);
    const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    }

    const renderCircles = () => {
        const circles = [];
        for (let i = 0; i < sections.length; i++) {
            circles.push(<Circle key={i} filled={value === i} />);
        }
        return circles;
    };



    return (
        <Box display="">
            <Box style={{
                flexGrow: 1,
                display: 'flex',
                height: "100%",
                justifyContent: 'center'
            }} ><Box display={{ xs: 'none', md: 'block' }}>
                    <Tabs
                        textColor='primary'
                        indicatorColor="primary"
                        orientation="vertical"
                        variant="scrollable"
                        value={value}

                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        aria-label="Vertical tabs example"
                        style={{ borderRight: `1px solid ${smokeGrey}`, display: 'inherit' }}
                    >
                        {sections.map(({ name, displayName }, idx) => <Tab onClick={() => onClickTab(name)} label={displayName} {...a11yProps(idx)} style={{ alignItems: '' }} />)}
                    </Tabs>
                </Box>
                {sections.map(({ name, render }, idx) => <>{typeof render == "function" ? render({ index: idx, getSectionProps: createGetSectionProps(name, activeSection) }) : <TabPanel value={value} index={idx} {...a11yProps(idx)}>
                    {render}
                </TabPanel>}
                </>)}
            </Box>
            <Box display={{ xs: 'flex', md: 'none' }} justifyContent='space-between' >
                <Box >
                    <ArrowBack onClick={() => { if (value > 0) onClickTab(sections[value - 1].name) }} style={{ color: `${value == 0 ? smokeGrey : marvelGreen}`, marginRight: '10px' }} />
                    <ArrowForward onClick={() => {
                        if (value < sections.length - 1) onClickTab(sections[value + 1].name)
                    }}
                        style={{ color: `${value == sections.length - 1 ? smokeGrey : marvelGreen}` }} />
                </Box>
                <Box>{renderCircles()}</Box>
            </Box>
        </Box>
    );
}
