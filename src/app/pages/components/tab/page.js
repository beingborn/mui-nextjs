import { Tabs, Tab } from '@/src/app/components/Tab/Tab';

export default function page() {
    return (
        <Tabs>
            <Tab label="탭 1">
                <div className="bg-amber-200">탭1</div>
                <div className="bg-amber-200">탭1</div>
                <div className="bg-amber-200">탭1</div>
                <div className="bg-amber-200">탭1</div>
            </Tab>
            <Tab label="탭 2">
                <div className="bg-amber-100">탭2</div>
            </Tab>
            <Tab label="탭 3">
                <div className="bg-amber-50">탭 3</div>
            </Tab>
        </Tabs>
    );
}
