import React from 'react'

export default function SizeGuide() {
  return (
    <div>
        <h1>SIZE GUIDE</h1>

        <p>Our shoe sizes are stocked from sizes 3-9. See how to measure for your size below.</p>

        <div className="size-table">
        <table>
          <thead>
            <tr>
              <th>UK Size</th>
              <th>UK Size</th>
              <th>EU Size</th>
              <th>USA Size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3</td>
              <td>S</td>
              <td>36</td>
              <td>5</td>
            </tr>
            <tr>
              <td>4</td>
              <td>S</td>
              <td>37</td>
              <td>6</td>
            </tr>
            <tr>
              <td>5</td>
              <td>M</td>
              <td>38</td>
              <td>7</td>
            </tr>
            <tr>
              <td>6</td>
              <td>M</td>
              <td>39</td>
              <td>8</td>
            </tr>
            <tr>
              <td>7</td>
              <td>L</td>
              <td>40</td>
              <td>9</td>
            </tr>
            <tr>
              <td>8</td>
              <td>L</td>
              <td>41</td>
              <td>10</td>
            </tr>
            <tr>
              <td>9</td>
              <td>n/a</td>
              <td>42</td>
              <td>11</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ul>
          <li>Our core footwear is a Standard C fitting (see chart below)</li>
          <li>Our Wide Fit footwear is a D fitting (see chart below)</li>
      </ul>
      
      
    <p>Our Wide Fit footwear has more room across the widest part of the foot than the standard fit, but the length is the same as standard fit. On Wide Fit boots, the calf measurement is increased, as well as the foot width.</p>
    <p>This range is specifically designed to fit and flatter a fuller foot without compromising on fashion or style.</p>

    <b>Measurement Chart</b>
    <p>Using the three measurements of your feet (length, width and calf), look on our chart below to find your closest size match. For example, if you’re 229 length, 225 width and 355 calf, then the best match is a Size 4 standard fit (C).</p>
    
    </div>
  )
}
