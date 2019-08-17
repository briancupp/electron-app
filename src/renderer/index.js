import React from 'react';
import ReactDOM from 'react-dom';

import StyledApplication, { GlobalStyle } from './Application.styled';

const Application = () => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <StyledApplication>
                <h3>Header</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id hendrerit arcu. Sed ornare
                    ultricies lectus quis egestas. Ut tristique lectus neque, sit amet pretium metus tincidunt sit amet.
                    Cras ut massa eu quam suscipit aliquam eget id felis. Duis ante tellus, dictum vitae ante vel,
                    malesuada tempus magna. Donec velit sem, pharetra quis lorem vitae, ullamcorper pretium ante.
                    Maecenas sit amet tellus et leo sagittis fringilla quis sed magna. In erat quam, lobortis at tellus
                    a, hendrerit interdum nulla. Cras a massa ut erat facilisis ornare sed at nulla. Fusce porta in leo
                    nec ultricies. Quisque in enim nec ipsum rhoncus vehicula sit amet et mauris. Nunc aliquam enim a
                    ante posuere scelerisque. Proin eleifend nibh vitae volutpat tincidunt.
                </p>

                <p>
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Suspendisse dignissim malesuada quam et varius. Integer a mattis metus, ultricies porttitor ligula.
                    Nullam congue metus et iaculis pellentesque. Donec eget nibh eget lorem pulvinar ultrices vulputate
                    in nibh. Phasellus maximus sagittis congue. Cras eget placerat tortor. Sed et tincidunt dui, in
                    gravida purus. Aenean gravida massa in vehicula tempus. Aliquam elementum vulputate lacus ut
                    vulputate. Nunc mi ipsum, luctus non velit scelerisque, posuere convallis tortor. Duis ornare
                    sollicitudin porta.
                </p>

                <p>
                    Fusce ullamcorper turpis a justo auctor, at ullamcorper ante rhoncus. Orci varius natoque penatibus
                    et magnis dis parturient montes, nascetur ridiculus mus. In tristique at lectus eget elementum.
                    Proin fermentum lorem viverra erat lacinia pulvinar. Maecenas non nisl molestie, porta tortor nec,
                    rhoncus ante. Phasellus cursus dignissim dolor et interdum. Donec at hendrerit odio. Suspendisse
                    lobortis urna non rhoncus faucibus. Etiam ultricies sed lacus gravida tempor. Suspendisse imperdiet
                    iaculis neque sit amet sodales. In pulvinar tempor justo quis luctus. Sed efficitur id nibh sed
                    auctor. Ut quis dictum ligula, in imperdiet erat. Ut dignissim pulvinar pulvinar.
                </p>

                <p>
                    Nam ultrices blandit quam dignissim facilisis. Aenean vestibulum nulla placerat lectus rutrum, sed
                    aliquet diam semper. Nunc mattis, arcu eu efficitur venenatis, risus dolor tempor massa, eget
                    facilisis velit nibh et neque. In dictum nulla a nibh vehicula euismod. Etiam ut mauris nibh. Donec
                    in tortor non libero facilisis finibus ut sit amet enim. Donec diam turpis, consectetur non
                    tincidunt non, volutpat eget dui. In sed enim in ipsum pharetra aliquet. Sed in tellus sit amet quam
                    fringilla volutpat. Proin efficitur ante sit amet ipsum lobortis, vitae rhoncus elit finibus.
                    Integer scelerisque fringilla diam in venenatis. Sed ultrices nibh a ante mollis, eu vehicula eros
                    sollicitudin. Duis dignissim, augue vitae tincidunt ultrices, ante lectus finibus justo, non
                    hendrerit justo dui et ipsum. Curabitur luctus tempor tortor, ut facilisis elit sagittis ut.
                    Curabitur vulputate odio nec arcu finibus vestibulum.
                </p>

                <p>
                    Fusce quis sem ut metus commodo consequat a congue justo. Pellentesque hendrerit metus lacus, mattis
                    varius nunc vestibulum non. Donec et lectus convallis, posuere velit ut, ullamcorper quam. Morbi vel
                    tortor quis nisl placerat iaculis. Ut molestie semper felis vitae euismod. Cras aliquam, dui ac
                    facilisis cursus, augue massa ultrices risus, a tristique felis tortor sed massa. Quisque a magna
                    vel leo porta vestibulum. Pellentesque nunc neque, ullamcorper ac lacus vitae, imperdiet finibus
                    tellus. Fusce eu felis sit amet dolor pulvinar lobortis non vitae libero. Vestibulum libero nunc,
                    eleifend in orci et, efficitur scelerisque felis. Donec libero nisi, volutpat non turpis nec,
                    gravida varius lorem. Morbi interdum arcu ullamcorper, posuere diam eget, hendrerit sem. Curabitur
                    purus ante, semper in turpis non, efficitur tincidunt ex. Phasellus arcu est, cursus ac erat vitae,
                    auctor fermentum augue. Ut venenatis eget tellus id pretium. Suspendisse luctus viverra interdum.
                </p>
            </StyledApplication>
        </React.Fragment>
    );
};

const container = document.getElementById('app');
ReactDOM.render(<Application />, container);
