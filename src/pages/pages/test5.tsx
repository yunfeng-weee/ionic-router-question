import { IonPage, IonHeader, IonContent, NavContext, useIonViewWillEnter } from '@ionic/react';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';

const About: React.FC = () => {
  const history = useHistory();
  const { navigate } = useContext(NavContext);
  const params = useParams();

  useIonViewWillEnter(() => {
    console.log('test5', params);
  });

  useEffect(() => {
    console.log('test55', params);
  }, []);

  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent>
        <div onClick={() => navigate(`/test/test6/${Math.floor(Math.random() * 1000)}`, 'forward', 'push')}>Test5</div>
        {/* <div onClick={() => history.replace(`/test/test5/${Math.floor(Math.random() * 1000)}`, { direction: 'back' })}>
          Test4
        </div> */}
        {/* <div onClick={() => navigate('/test/test1', 'back', 'pop')}>Test4</div> */}
      </IonContent>
    </IonPage>
  );
};

export default About;
