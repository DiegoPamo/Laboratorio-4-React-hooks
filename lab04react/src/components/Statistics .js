import Statistic from './Statistic';

const Statistics = (props) => {
    return(
        <div>
            <Statistic text="good" value={props.good}/>
            <Statistic text="neutral" value={props.neutral}/>
            <Statistic text="bad" value={props.bad}/>

            <Statistic text="all" value={props.good+props.neutral+props.bad}/>
            <Statistic text="average" value={(props.good-props.bad) / (props.good+props.neutral+props.bad)}/>
            <Statistic text="positive" value={props.good / (props.good+props.neutral+props.bad)*100 +" %"}/>
        </div>
        )
}
export default Statistics;