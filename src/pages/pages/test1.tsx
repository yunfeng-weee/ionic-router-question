import { IonPage, IonHeader, IonContent, NavContext } from '@ionic/react';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';

const About: React.FC = () => {
  const history = useHistory();
  const { navigate } = useContext(NavContext);
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent>
        {/* <div onClick={() => history.replace(`/test/test2/${Math.floor(Math.random() * 1000)}`, { direction: 'back' })}> */}
        <div onClick={() => history.replace(`/test/test2/${Math.floor(Math.random() * 1000)}`)}>
          Test1
        </div>
      </IonContent>
    </IonPage>
  );
};

export default About;
