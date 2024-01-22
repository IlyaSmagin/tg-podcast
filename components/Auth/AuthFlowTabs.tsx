"use client";
import {
	ReactNode,
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from "react";

const TabContext = createContext<{
	activeTabValue: string;
	changeTab: Function;
}>({
	activeTabValue: "",
	changeTab: () => "",
});

function Tabs({
	children,
	defaultActiveTabValue,
}: {
	children: ReactNode;
	defaultActiveTabValue: string;
}) {
	const [activeTabValue, setActiveTabValue] = useState(defaultActiveTabValue);
	const changeTab = useCallback((tabValue: string) => {
		setActiveTabValue(tabValue);
	}, []);
	const contextValue = useMemo(
		() => ({ activeTabValue, changeTab }),
		[activeTabValue, changeTab]
	);

	return (
		<>
			<TabContext.Provider value={contextValue}>
				{children}
			</TabContext.Provider>
		</>
	);
}
function TabSwitch({
	tabValue,
	children,
}: {
	tabValue: string;
	children: ReactNode;
}) {
	const { activeTabValue, changeTab } = useContext(TabContext);
	return (
		<div
			className={`${
				activeTabValue === tabValue
					? "underline decoration-orange-500 underline-offset-2"
					: ""
			}`}
			onClick={() => changeTab(tabValue)}
		>
			{children}
		</div>
	);
}
//TODO create TabHeaderComponent
function TabContent({
	tabValue,
	children,
}: {
	tabValue: string;
	children?: ReactNode;
}) {
	const { activeTabValue } = useContext(TabContext);
	return activeTabValue === tabValue ? children : null;
}
//todo finish compound compontnts layout
export { Tabs, TabContent, TabSwitch };
