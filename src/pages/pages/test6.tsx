import { IonPage, IonHeader, IonContent, NavContext, useIonViewWillEnter } from '@ionic/react';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';

const About: React.FC = () => {
  const history = useHistory();
  const { navigate } = useContext(NavContext);
  const params = useParams();

  useIonViewWillEnter(() => {
    console.log('test6');
  });

  useEffect(() => {
    console.log('test66', params);
  }, []);

  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent>
        <div onClick={() => navigate('/test/test1', 'back', 'pop')}>Test6</div>
      </IonContent>
    </IonPage>
  );
};

export default About;
