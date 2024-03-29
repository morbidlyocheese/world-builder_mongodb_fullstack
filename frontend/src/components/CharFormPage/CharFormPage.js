import { useState } from 'react';
// import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './CharFormPage.css';
import { fetchCharacters, submitCharacter } from '../../store/char';
import { fetchTales } from '../../store/tale';

function CharFormPage() {
    const userId = useSelector((state) => state.session.user._id);
    const dispatch = useDispatch();

    const [state, setState] = useState({
        name: '', 
        bio: '', 
        userId: userId,
        age: 0, 
        gender: '', 
        height: '',
        bodyType: '', 
        hairColor: '', 
        race: '',
        personality: '',
        motivation: '',
        posture: '',
        facialHair: '',
        eyes: '',
        behavior: '',
        dailyLife: '',
        quirks: '',
        fatalFlaw: '',
        talents: '',
        skills: '',
        occupation: '',
        hobbies: '',
        wounds: '',
        fearOne: '',
        fearTwo: '',
        fearThree: '',
        fearFour: '',
        fearFive: '',
        fearSix: '',
        positiveTraits: '',
        negativeTraits: '',
        idle: '',
        stressed: '',
        exhausted: '',
        inebriated: '',
        anxious: '',
        distracted: '',
        attraction: '',
        aroused: '',
        anger: '',
        provoke: '',
        overreact: '',
        denial: '',
        negCoping: '',
        posCoping: '',
        outerMot: '',
        innerMotGen: '',
        innerMotSpec: ''
    })
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(submitCharacter({
            name: state.name, 
            bio: state.bio, 
            userId: userId,
            age: state.age, 
            gender: state.gender, 
            height: state.height,
            bodyType: state.bodyType, 
            hairColor: state.hairColor, 
            race: state.race,
            personality: state.personality,
            motivation: state.motivation,
            posture: state.posture,
            facialHair: state.facialHair,
            eyes: state.eyes,
            behavior: state.behavior,
            dailyLife: state.dailyLife,
            quirks: state.quirks,
            fatalFlaw: state.fatalFlaw,
            talents: state.talents,
            skills: state.skills,
            occupation: state.occupation,
            hobbies: state.hobbies,
            wounds: state.wounds,
            fearOne: state.fearOne,
            fearTwo: state.fearTwo,
            fearThree: state.fearThree,
            fearFour: state.fearFour,
            fearFive: state.fearFive,
            fearSix: state.fearSix,
            positiveTraits: state.positiveTraits,
            negativeTraits: state.negativeTraits,
            idle: state.idle,
            stressed: state.stressed,
            exhausted: state.exhausted,
            inebriated: state.inebriated,
            anxious: state.anxious,
            distracted: state.distracted,
            attraction: state.attraction,
            aroused: state.aroused,
            anger: state.anger,
            provoke: state.provoke,
            overreact: state.overreact,
            denial: state.denial,
            negCoping: state.negCoping,
            posCoping: state.posCoping,
            outerMot: state.outerMot,
            innerMotGen: state.innerMotGen,
            innerMotSpec: state.innerMotSpec
        }));
        setRedirect(true);
    }

    if (redirect) {
        dispatch(fetchCharacters());
        dispatch(fetchTales());
        return <Redirect to='/home'/>;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        });
    }

    const handleCancel = () => {
        setRedirect(true);
    }

    return (
        <div className='character-form-container'>
            <form onSubmit={handleSubmit}>
                <input type="hidden" name="_csrf" value="{{csrfToken}}"/>
                <div className='input-container'>
                    <label className='input-label char-name-label'>
                        Name: <br/>
                        <input className='input' type='text' name='name' value={state.name} onChange={handleChange} className='char-name-input' required/>
                    </label>
                </div>
                <div className='input-container'>
                    <label className='input-label'>
                        Age: 
                        <input className='input' type='number' name='age' value={state.age} onChange={handleChange} className='char-age-input' required/>
                    </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    Bio: 
                    <textarea name='bio' value={state.bio} onChange={handleChange} className='char-bio-input' required/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    Gender:
                    <input className='input' name='gender' value={state.gender} onChange={handleChange} className='char-gender-input' required/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    Height: 
                    <input className='input' name='height' value={state.height} onChange={handleChange} className='char-height-input' required/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    Body Type: 
                    <input className='input' name='bodyType' value={state.bodyType} onChange={handleChange} className='char-bodyType-input' required/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    Hair Color: 
                    <input className='input' name='hairColor' value={state.hairColor} onChange={handleChange} className='char-hairColor-input' required/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    Race: 
                    <input className='input' name='race' value={state.race} onChange={handleChange} className='char-race-input'/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    Personality:
                    <input className='input' name='personality' value={state.personality} onChange={handleChange} className='char-personality-input'/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    Motivation:
                    <input className='input' name='motivation' value={state.motivation} onChange={handleChange} className='char-motivation-input'/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    Posture:
                    <input className='input' name='posture' value={state.posture} onChange={handleChange} className='char-posture-input'/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    Facial Hair:
                    <input className='input' name='facialHair' value={state.facialHair} onChange={handleChange} className='char-facial_hair-input'/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    Eyes:
                    <input className='input' name='eyes' value={state.eyes} onChange={handleChange} className='char-eyes-input'/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    Behavior/s:
                    <input className='input' name='behavior' value={state.behavior} onChange={handleChange} className='char-behavior-input'/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    Daily Life:
                    <input className='input' name='dailyLife' value={state.dailyLife} onChange={handleChange} className='char-daily_life-input'/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    Quirk/s:
                    <input className='input' name='quirks' value={state.quirks} onChange={handleChange} className='char-quirks-input'/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    Fatal Flaw/s:
                    <input className='input' name='fatalFlaw' value={state.fatalFlaw} onChange={handleChange} className='char-fatal_flaw-input'/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    Talent/s:
                    <input className='input' name='talents' value={state.talents} onChange={handleChange} className='char-talents-input'/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    Skill/s:
                    <input className='input' name='skills' value={state.skills} onChange={handleChange} className='char-skills-input'/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    Occupation:
                    <input className='input' name='occupation' value={state.occupation} onChange={handleChange} className='char-occupation-input'/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    Hobbies:
                    <input className='input' name='hobbies' value={state.hobbies} onChange={handleChange} className='char-hobbies-input'/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    Wounds:
                    <input className='input' name='wounds' value={state.wounds} onChange={handleChange} className='char-wounds-input'/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    What situations will the character now avoid?:
                    <input className='input' name='fearOne' value={state.fearOne} onChange={handleChange} className='char-'fear_one-input/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    In what situations or settings will the character now feel threatened, unsafe, or vulnerable?:
                    <input className='input' name='fearTwo' value={state.fearTwo} onChange={handleChange} className='char-fear_two-input'/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    How does the character hide this fear from others?:
                    <input className='input' name='fearThree' value={state.fearThree} onChange={handleChange} className='char-fear_three-input'/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    How does the fear impact the character’s relationships with others (negatively and/or positively)?:
                    <input className='input' name='fearFour' value={state.fearFour} onChange={handleChange} className='char-fear_four-input'/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    How does the fear affect the character at work?:
                    <input className='input' name='fearFive' value={state.fearFive} onChange={handleChange} className='char-fear_five-input'/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    How has the character’s fear diminished their self-esteem?:
                    <input className='input' name='fearSix' value={state.fearSix} onChange={handleChange} className='char-fear_six-input'/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    Positive Traits:
                    <input className='input' name='positiveTraits' value={state.positiveTraits} onChange={handleChange} className='char-positive_traits-input'/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    Negative Traits:
                    <input className='input' name='negativeTraits' value={state.negativeTraits} onChange={handleChange} className='char-negative_traits-input'/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    When idle they will:
                    <input className='input' name='idle' value={state.idle} onChange={handleChange} className='char-idle-input'/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    When stressed they will:
                    <input className='input' name='stressed' value={state.stressed} onChange={handleChange} className='char-stressed-input'/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    When exhausted they will:
                    <input className='input' name='exhausted' value={state.exhausted} onChange={handleChange} className='char-exhausted-input'/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    When inebriated they will:
                    <input className='input' name='inebriated' value={state.inebriated} onChange={handleChange} className='char-inebriated-input'/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    When anxious they will:
                    <input className='input' name='anxious' value={state.anxious} onChange={handleChange} className='char-anxious-input'/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    When distracted they will:
                    <input className='input' name='distracted' value={state.distracted} onChange={handleChange} className='char-distracted-input'/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    When attracted to someone they will:
                    <input className='input' name='attraction' value={state.attraction} onChange={handleChange} className='char-attraction-input'/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    When aroused they will:
                    <input className='input' name='aroused' value={state.aroused} onChange={handleChange} className='char-aroused-input'/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    When they are angry they will:
                    <input className='input' name='anger' value={state.anger} onChange={handleChange} className='char-anger-input'/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    What it takes to provoke:
                    <input className='input' name='provoke' value={state.provoke} onChange={handleChange} className='char-provoke-input'/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    Will overreact when:
                    <input className='input' name='overreact' value={state.overreact} onChange={handleChange} className='char-overreact-input'/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    In denial about:
                    <input className='input' name='denial' value={state.denial} onChange={handleChange} className='char-denial-input'/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    Negative Coping Mechanisms:
                    <input className='input' name='negCoping' value={state.negCoping} onChange={handleChange} className='char-negCoping-input'/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    Positive Coping Mechanisms:
                    <input className='input' name='posCoping' value={state.posCoping} onChange={handleChange} className='char-posCoping-input'/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    <p className='mot-p'>Outer Motivation;</p>
                    <p className='mot-p'>1. What's at stake if goal isn't achieved(primary stake)</p>
                    <p className='mot-p'>2. Forms this might take</p>
                    <p className='mot-p'>3. Talents/Skills that will help reach goal:</p>
                    <input className='input' name='outerMot' value={state.outerMot} onChange={handleChange} className='char-outerMot-input'/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    General Inner Motivation (Unmet Need):
                    <input className='input' name='innerMotGen' value={state.innerMotGen} onChange={handleChange} className='char-innerMotGen-input'/>
                </label>
                </div>
                <div className='input-container'>
                <label className='input-label'>
                    Specific Inner Motivation (Unmet Need):
                    <input className='input' name='innerMotSpec' value={state.innerMotSpec} onChange={handleChange} className='char-innerMotSpec-input'/>
                </label>
                </div>
                <div className='char-buttons'>
                    <button type='submit' className='char-button'>Submit</button>
                    <button className='cancel-button' onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    )

}

export default CharFormPage;