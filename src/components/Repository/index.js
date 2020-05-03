import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container, Name, Description, Stats, Stat, StatCount, Refresh, RefreshText,
} from './styles';

export default function Repository({ data, onRefresh }) {
  return (
    <Container>
      <Name>{data.name}</Name>
      <Description>{data.description}</Description>

      <Stats>
        <Stat>
          <Icon name="star" size={16} color="#333" />
          <StatCount>{data.names}</StatCount>
        </Stat>
      </Stats>

      <Refresh onPress={onRefresh}>
        <Icon name="refresh" color="#7159c1" size={16} />
        <RefreshText>ATUALIZAR</RefreshText>
      </Refresh>
    </Container>
  );
}
